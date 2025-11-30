import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, inject, signal } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { SupabaseService } from '../../../services/supabase.service';

interface Testimonial {
  avatar_url: string;
  quote: string;
}

@Component({
  selector: 'app-testimonials-section',
  imports: [],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsSection implements AfterViewInit {
  private supabase = inject(SupabaseService);
  
  testimonials = signal<Testimonial[]>([]);

  constructor() {
    this.fetchTestimonials();
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
    new Swiper('.mySwiper', {
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