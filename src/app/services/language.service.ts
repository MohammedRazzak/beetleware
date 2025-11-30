import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private document = inject(DOCUMENT);
  private translateService = inject(TranslateService);
  
  private readonly storageKey = 'app-language';
  
  readonly currentLang = signal<Language>(this.getStoredLanguage());
  
  readonly isRtl = computed(() => this.currentLang() === 'ar');
  
  readonly direction = computed(() => this.isRtl() ? 'rtl' : 'ltr');

  constructor() {
    // Initialize translate service with stored language
    const initialLang = this.getStoredLanguage();
    this.translateService.use(initialLang);
    
    effect(() => {
      const lang = this.currentLang();
      const dir = this.direction();
      
      // Update document attributes
      this.document.documentElement.setAttribute('lang', lang);
      this.document.documentElement.setAttribute('dir', dir);
      this.document.body.setAttribute('dir', dir);
      
      // Sync with ngx-translate
      this.translateService.use(lang);
      
      // Persist to localStorage
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
