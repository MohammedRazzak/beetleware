import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';

@Component({
  selector: 'app-cover-section',
  imports: [BetButton],
  templateUrl: './cover-section.html',
  styleUrl: './cover-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverSection {

}
