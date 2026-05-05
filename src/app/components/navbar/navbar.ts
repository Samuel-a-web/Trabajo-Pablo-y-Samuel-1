import { Component, PLATFORM_ID, inject, afterNextRender, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { AuthModalComponent } from '../auth-modal/auth-modal';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, AuthModalComponent],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);
  public authService = inject(AuthService);
  public cartService = inject(CartService);
  private offcanvasInstance: any = null;

  @ViewChild('authModal') authModal!: AuthModalComponent;

  constructor() {
    afterNextRender(() => {
      this.initOffcanvas();
    });
  }

  private initOffcanvas(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById('navbarOffcanvas');
    if (el && typeof (window as any).bootstrap !== 'undefined') {
      this.offcanvasInstance = (window as any).bootstrap.Offcanvas.getOrCreateInstance(el);
    }
  }

  closeOffcanvas(): void {
    this.offcanvasInstance?.hide();
  }

  openAuthModal(): void {
    this.authModal?.show();
  }

  logout(): void {
    this.authService.logout();
  }
}
