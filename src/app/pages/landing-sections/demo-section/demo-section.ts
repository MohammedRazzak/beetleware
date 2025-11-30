import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';

@Component({
  selector: 'app-demo-section',
  imports: [BetButton],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSection {

}
