import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about';
import { HomePageComponent } from './pages/home/home';
import { MenuPageComponent } from './pages/menu/menu';

export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'El Crustáceo Crujiente' },
  { path: 'menu', component: MenuPageComponent, title: 'Menú - El Crustáceo Crujiente' },
  { path: 'about', component: AboutPageComponent, title: 'Nosotros - El Crustáceo Crujiente' },
  { path: '**', redirectTo: '' },
];
