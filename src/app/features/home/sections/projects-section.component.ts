import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { ProjectItem } from '../../../data/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  readonly items = input.required<readonly ProjectItem[]>();
}
