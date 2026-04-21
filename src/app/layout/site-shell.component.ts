import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PortfolioContentService } from '../core/portfolio-content.service';
import { SiteFooterComponent } from './site-footer.component';
import { SiteHeaderComponent } from './site-header.component';
import { SITE_NAV_ITEMS } from './site-nav.model';

@Component({
  selector: 'app-site-shell',
  standalone: true,
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  templateUrl: './site-shell.component.html',
  styleUrl: './site-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteShellComponent {
  private readonly content = inject(PortfolioContentService);

  protected readonly navItems = SITE_NAV_ITEMS;
  protected readonly snapshot = this.content.getSnapshot();
  protected readonly year = new Date().getFullYear();
}
