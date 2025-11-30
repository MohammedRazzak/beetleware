import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';

@Component({
  selector: 'app-tabs-section',
  imports: [BetButton],
  templateUrl: './tabs-section.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './tabs-section.css',
})
export class TabsSection {
  activeTab = signal(0);

  tabs = [
    { label: 'Product' },
    { label: 'Intergration' },
    { label: 'Demo' },
    { label: 'Pricing' },
    { label: 'Login' },
  ];

  setActiveTab(index: number) {
    this.activeTab.set(index);
  }
}
