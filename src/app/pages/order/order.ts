import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './order.html',
})
export class OrderPageComponent {
  public cartService = inject(CartService);
  orderConfirmed = false;

  formData = {
    name: '',
    phone: '',
    address: '',
    notes: ''
  };

  confirmOrder() {
    if (this.formData.name && this.formData.phone && this.formData.address && this.cartService.totalItemsCount() > 0) {
      this.orderConfirmed = true;
      this.cartService.clearCart();
      // Scroll to top to see the success message
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
