import { Component, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
})
export class FooterComponent {
  private readonly platformId = inject(PLATFORM_ID);
  readonly year = new Date().getFullYear();

  constructor() {
    afterNextRender(() => {
      this.initTooltips();
    });
  }

  private initTooltips(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const bs = (window as any).bootstrap;
    if (!bs) return;
    const tooltipTriggerList = document.querySelectorAll('.footer [data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((el) => {
      new bs.Tooltip(el);
    });
  }
}
