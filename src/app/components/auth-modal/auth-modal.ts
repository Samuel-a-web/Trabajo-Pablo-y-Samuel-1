import { Component, PLATFORM_ID, inject, signal, afterNextRender } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.html',
})
export class AuthModalComponent {
  private platformId = inject(PLATFORM_ID);
  private authService = inject(AuthService);

  private modalInstance: any = null;

  isLoginMode = signal<boolean>(true);
  username = signal<string>('');
  password = signal<string>('');
  errorMessage = signal<string>('');

  constructor() {
    afterNextRender(() => {
      this.initModal();
    });
  }

  private initModal(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const el = document.getElementById('authModal');
    if (el && typeof (window as any).bootstrap !== 'undefined') {
      this.modalInstance = (window as any).bootstrap.Modal.getOrCreateInstance(el);
      
      // Clear form when modal is closed
      el.addEventListener('hidden.bs.modal', () => {
        this.resetForm();
      });
    }
  }

  public show(): void {
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }

  public hide(): void {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }

  toggleMode(): void {
    this.isLoginMode.update(v => !v);
    this.errorMessage.set('');
  }

  private resetForm(): void {
    this.username.set('');
    this.password.set('');
    this.errorMessage.set('');
    this.isLoginMode.set(true);
  }

  onSubmit(): void {
    if (!this.username().trim() || !this.password().trim()) {
      this.errorMessage.set('Por favor, rellena todos los campos');
      return;
    }

    const credentials = {
      username: this.username().trim(),
      password: this.password()
    };

    let result;
    if (this.isLoginMode()) {
      result = this.authService.login(credentials);
    } else {
      result = this.authService.register(credentials);
    }

    if (result.success) {
      this.hide();
      this.resetForm();
    } else {
      this.errorMessage.set(result.error || 'Ocurrió un error inesperado');
    }
  }
}
