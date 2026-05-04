import { Injectable } from '@angular/core';
import { CrewMember, ScheduleItem } from '../models/restaurant.models';

@Injectable({ providedIn: 'root' })
export class RestaurantService {
  private readonly crew: readonly CrewMember[] = [
    {
      id: 'bob',
      name: 'Bob Esponja',
      emoji: '🧽',
      description: 'Cocinero estrella del Crustáceo Crujiente. Siempre prepara cada Cangreburger con energía y una gran sonrisa.',
    },
    {
      id: 'calamardo',
      name: 'Calamardo',
      emoji: '🐙',
      description: 'Encargado de caja y atención al cliente. Mantiene el orden del local, aunque no siempre con el mejor humor.',
    },
    {
      id: 'cangrejo',
      name: 'El Señor Cangrejo',
      emoji: '🦀',
      description: 'Propietario del restaurante y guardián de la receta secreta. Lidera el negocio con visión y mucha ambición.',
    },
  ];

  private readonly schedule: readonly ScheduleItem[] = [
    { day: 'Lunes - Jueves', hours: '13:00 - 16:00 / 20:00 - 23:00' },
    { day: 'Viernes', hours: '13:00 - 16:30 / 20:00 - 23:30' },
    { day: 'Sábado', hours: '13:00 - 16:30 / 20:00 - 00:00' },
    { day: 'Domingo', hours: '13:00 - 16:00' },
  ];

  getCrew(): readonly CrewMember[] {
    return this.crew;
  }

  getSchedule(): readonly ScheduleItem[] {
    return this.schedule;
  }
}

