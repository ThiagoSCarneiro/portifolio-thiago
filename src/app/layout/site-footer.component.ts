import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SocialLink } from '../data/portfolio.models';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  readonly year = input.required<number>();
  readonly author = input.required<string>();
  readonly links = input.required<readonly SocialLink[]>();

  protected isHttpLink(link: SocialLink): boolean {
    return link.url.startsWith('http');
  }
}
