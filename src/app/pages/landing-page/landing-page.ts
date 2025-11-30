import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CoverSection } from '../landing-sections/cover-section/cover-section';
import { StaticsSection } from '../landing-sections/statics-section/statics-section';
import { DemoSection } from '../landing-sections/demo-section/demo-section';
import { PricingSection } from '../landing-sections/pricing-section/pricing-section';
import { TestimonialsSection } from '../landing-sections/testimonials-section/testimonials-section';
import { TabsSection } from '../landing-sections/tabs-section/tabs-section';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CoverSection, StaticsSection, DemoSection, PricingSection, TestimonialsSection, TabsSection],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

}
