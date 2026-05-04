import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class HomePageComponent {
  readonly cards = [
    {
      title: 'BURGER SECRETA',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400',
      alt: 'Burger secreta',
      description: 'La Cangreburger más famosa de Fondo de Bikini, con salsa secreta de la casa.',
    },
    {
      title: 'PAPAS DE CORAL',
      image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400',
      alt: 'Papas de coral',
      description: 'Crujientes, doradas y listas para acompañar cualquier pedido submarino.',
    },
    {
      title: 'BEBIDA DE MEDUSA',
      image: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=400',
      alt: 'Bebida de medusa',
      description: 'Refresco burbujeante con toque tropical para bajar el calor del océano.',
    },
  ] as const;
}

