import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { EducationItem } from '../../../data/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationSectionComponent {
  readonly items = input.required<readonly EducationItem[]>();
}
