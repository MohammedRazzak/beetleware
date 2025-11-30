import { Injectable, signal, computed, effect } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { inject } from '@angular/core';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private document = inject(DOCUMENT);
  
  private readonly storageKey = 'app-language';
  
  readonly currentLang = signal<Language>(this.getStoredLanguage());
  
  readonly isRtl = computed(() => this.currentLang() === 'ar');
  
  readonly direction = computed(() => this.isRtl() ? 'rtl' : 'ltr');

  constructor() {
    effect(() => {
      const lang = this.currentLang();
      const dir = this.direction();
      
      this.document.documentElement.setAttribute('lang', lang);
      this.document.documentElement.setAttribute('dir', dir);
      this.document.body.setAttribute('dir', dir);
      
      localStorage.setItem(this.storageKey, lang);
    });
  }

  toggleLanguage(): void {
    this.currentLang.update(lang => lang === 'en' ? 'ar' : 'en');
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }

  private getStoredLanguage(): Language {
    if (typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'en' || stored === 'ar') {
        return stored;
      }
    }
    return 'en';
  }
}
