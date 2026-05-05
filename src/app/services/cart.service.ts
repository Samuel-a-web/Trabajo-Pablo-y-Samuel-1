import { Injectable, computed, signal } from '@angular/core';
import { Item, CartItem } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // We use a Signal to hold the state
  readonly cartItems = signal<CartItem[]>([]);

  // Computed signal for total number of items
  readonly totalItemsCount = computed(() => {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  });

  // Computed signal for the total price mathematically
  readonly cartTotalNumber = computed(() => {
    return this.cartItems().reduce((total, item) => {
      return total + (this.parsePrice(item.precio) * item.quantity);
    }, 0);
  });

  // Computed signal to format the total back to currency
  readonly cartTotalFormatted = computed(() => {
    return this.cartTotalNumber().toFixed(2).replace('.', ',') + ' €';
  });

  // Add an item to the cart, or increment quantity if it exists
  addToCart(item: Item): void {
    this.cartItems.update(items => {
      const existing = items.find(i => i.id === item.id);
      if (existing) {
        return items.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...items, { ...item, quantity: 1 }];
    });
  }

  // Remove an item entirely or decrease quantity
  removeFromCart(itemId: string, completely: boolean = false): void {
    this.cartItems.update(items => {
      if (completely) {
        return items.filter(i => i.id !== itemId);
      }
      
      const existing = items.find(i => i.id === itemId);
      if (existing && existing.quantity > 1) {
        return items.map(i => i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i);
      }
      
      return items.filter(i => i.id !== itemId);
    });
  }

  clearCart(): void {
    this.cartItems.set([]);
  }

  // Parses '7,90 €' into 7.90
  private parsePrice(precio: string): number {
    if (!precio) return 0;
    const cleanStr = precio.replace('€', '').replace(',', '.').trim();
    const num = parseFloat(cleanStr);
    return isNaN(num) ? 0 : num;
  }
}
