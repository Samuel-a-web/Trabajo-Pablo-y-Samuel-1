export interface MenuItem {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
}

export interface MenuCategory {
  readonly id: string;
  readonly title: string;
  readonly icon: string;
  readonly items: readonly MenuItem[];
}

