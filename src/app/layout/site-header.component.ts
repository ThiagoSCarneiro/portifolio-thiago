import { ChangeDetectionStrategy, Component, HostListener, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import type { SiteNavItem } from './site-nav.model';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  readonly brand = input.required<string>();
  readonly navItems = input.required<readonly SiteNavItem[]>();

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.menuOpen()) {
      this.closeMenu();
    }
  }
}
