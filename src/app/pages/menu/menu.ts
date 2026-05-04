import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-menu-page',
  imports: [NgFor],
  templateUrl: './menu.html',
})
export class MenuPageComponent {
  private readonly itemService = inject(ItemService);
  readonly items = this.itemService.getItems();

  readonly categories = [
    { id: 'cangreburgers', title: 'Cangreburgers', icon: '🍔', items: this.items.slice(0, 4) },
    { id: 'entrantes', title: 'Entrantes', icon: '🥨', items: this.items.slice(4, 8) },
    { id: 'bebidas', title: 'Bebidas', icon: '🥤', items: this.items.slice(8, 12) },
    { id: 'postres', title: 'Postres', icon: '🍰', items: this.items.slice(12, 16) },
  ] satisfies { id: string; title: string; icon: string; items: Item[] }[];
}
