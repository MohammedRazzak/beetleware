import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private languageService = inject(LanguageService);
  
  protected readonly title = signal('beetleware');
  protected readonly isRtl = this.languageService.isRtl;
}
