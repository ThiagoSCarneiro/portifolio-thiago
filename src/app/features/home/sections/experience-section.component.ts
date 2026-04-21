import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { ExperienceItem } from '../../../data/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-experience-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './experience-section.component.html',
  styleUrl: './experience-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSectionComponent {
  readonly items = input.required<readonly ExperienceItem[]>();
}
