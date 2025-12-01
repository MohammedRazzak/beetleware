import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, inject, signal, effect, ElementRef, viewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { SupabaseService } from '../../../services/supabase.service';
import { LanguageService } from '../../../services/language.service';

interface Testimonial {
  avatar_url: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials-section',
  imports: [TranslateModule],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsSection implements AfterViewInit {
  private supabase = inject(SupabaseService);
  private languageService = inject(LanguageService);
  
  swiperContainer = viewChild<ElementRef>('swiperContainer');
  testimonials = signal<Testimonial[]>([]);
  private swiperInstance: Swiper | null = null;

  isRtl = this.languageService.isRtl;

  constructor() {
    this.fetchTestimonials();
    
    effect(() => {
      const isRtl = this.languageService.isRtl();
      if (this.swiperInstance) {
        this.swiperInstance.destroy(true, true);
        setTimeout(() => this.initSwiper(), 50);
      }
    });
  }

  ngAfterViewInit() {
    this.initSwiper();
  }

  private fetchTestimonials() {
    this.supabase.getAll<Testimonial>('testimonials').subscribe({
      next: (data) => {
        this.testimonials.set(data);
        setTimeout(() => this.initSwiper(), 100);
      },
      error: (err) => console.error('Error fetching testimonials:', err)
    });
  }

  private initSwiper() {
    const container = this.swiperContainer()?.nativeElement;
    if (container) {
      container.dir = this.languageService.isRtl() ? 'rtl' : 'ltr';
    }
    
    this.swiperInstance = new Swiper('.mySwiper', {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }
}