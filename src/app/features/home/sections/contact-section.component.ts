import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SocialLink } from '../../../data/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSectionComponent {
  readonly email = input.required<string>();
  readonly phone = input.required<string>();
  readonly phoneDialUrl = input.required<string>();
  readonly location = input.required<string>();
  readonly links = input.required<readonly SocialLink[]>();
}
