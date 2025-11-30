import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cover-section',
  imports: [BetButton, TranslateModule],
  templateUrl: './cover-section.html',
  styleUrl: './cover-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverSection {

}
