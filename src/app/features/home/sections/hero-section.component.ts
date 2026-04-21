import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { Profile } from '../../../data/portfolio.models';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly profile = input.required<Profile>();
}
