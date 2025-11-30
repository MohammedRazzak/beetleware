import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tabs-section',
  imports: [BetButton, TranslateModule],
  templateUrl: './tabs-section.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tabs-section.css',
})
export class TabsSection {
  private translate = inject(TranslateService);
  activeTab = signal(0);

  tabs = [
    { label: 'tabs.product' },
    { label: 'tabs.integration' },
    { label: 'tabs.demo' },
    { label: 'tabs.pricing' },
    { label: 'tabs.login' },
  ];

  setActiveTab(index: number) {
    this.activeTab.set(index);
  }
}
