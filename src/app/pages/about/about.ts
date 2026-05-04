import { Component, inject } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about.html',
})
export class AboutPageComponent {
  private readonly restaurantService = inject(RestaurantService);
  readonly crew = this.restaurantService.getCrew();
  readonly schedule = this.restaurantService.getSchedule();
}

