import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { SectionHeadingComponent } from '../../../shared/components/section-heading.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeadingComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  readonly summary = input.required<string>();
}
