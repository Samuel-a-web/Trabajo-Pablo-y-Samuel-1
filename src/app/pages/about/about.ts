import { Component, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.html',
})
export class AboutPageComponent {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly restaurantService = inject(RestaurantService);
  readonly crew = this.restaurantService.getCrew();
  readonly schedule = this.restaurantService.getSchedule();

  constructor() {
    afterNextRender(() => {
      this.initTooltips();
    });
  }

  private initTooltips(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const bs = (window as any).bootstrap;
    if (!bs) return;
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => {
      new bs.Tooltip(el);
    });
  }
}
