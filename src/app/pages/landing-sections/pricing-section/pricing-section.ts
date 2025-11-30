import { Component, ChangeDetectionStrategy, inject, signal } from '@angular/core';
import { BetButton } from '../../../shared/bet-button/bet-button';
import { SupabaseService } from '../../../services/supabase.service';


interface Pricing {
  name: string;
  price: number;
  desc: string;
  features: string[];
}

@Component({
  selector: 'app-pricing-section',
  imports: [BetButton],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingSection {
  private supabase = inject(SupabaseService);
  pricing = signal<Pricing[]>([]);

  ngOnInit() {
    this.fetchPricing();
  }

  private fetchPricing() {
    this.supabase.getAll<Pricing>('pricing').subscribe({
      next: (data) => {
        this.pricing.set(data);
      },
      error: (err) => console.error('Error fetching pricing:', err)
    });
  }
}
