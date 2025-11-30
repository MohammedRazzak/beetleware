import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-demo-section',
  imports: [BetButton, TranslateModule],
  templateUrl: './demo-section.html',
  styleUrl: './demo-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoSection {

}
