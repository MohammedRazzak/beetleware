import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { BetButton } from '../../shared/bet-button/bet-button';
import { LanguageService } from '../../services/language.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [BetButton, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private languageService = inject(LanguageService);
  
  isMenuOpen = signal(false);
  currentLang = this.languageService.currentLang;
  isRtl = this.languageService.isRtl;

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
