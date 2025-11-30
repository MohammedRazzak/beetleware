import { Component, input } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'outline';
type ButtonRadius = 'lg' | 'md';

@Component({
  selector: 'app-bet-button',
  imports: [],
  templateUrl: './bet-button.html',
  styleUrl: './bet-button.css',
})
export class BetButton {
    public label = input<string>();
    public type = input<ButtonType>();
    public radius = input<ButtonRadius>();
}
