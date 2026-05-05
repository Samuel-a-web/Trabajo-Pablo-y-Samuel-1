export interface Item {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  image?: string; // Adding optional image since the UI needs it for the cart
}

export interface CartItem extends Item {
  quantity: number;
}

