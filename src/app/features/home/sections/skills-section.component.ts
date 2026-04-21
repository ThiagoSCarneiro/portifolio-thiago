import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { SkillGroup } from '../../../data/portfolio.models';
import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSectionComponent {
  readonly groups = input.required<readonly SkillGroup[]>();
}
