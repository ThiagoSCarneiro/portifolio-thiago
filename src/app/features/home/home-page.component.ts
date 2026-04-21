import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PortfolioContentService } from '../../core/portfolio-content.service';
import { AboutSectionComponent } from './sections/about-section.component';
import { ContactSectionComponent } from './sections/contact-section.component';
import { EducationSectionComponent } from './sections/education-section.component';
import { ExperienceSectionComponent } from './sections/experience-section.component';
import { HeroSectionComponent } from './sections/hero-section.component';
import { ProjectsSectionComponent } from './sections/projects-section.component';
import { SkillsSectionComponent } from './sections/skills-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutSectionComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    ProjectsSectionComponent,
    SkillsSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  private readonly content = inject(PortfolioContentService);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  protected readonly snapshot = this.content.getSnapshot();

  constructor() {
    const profile = this.snapshot.profile;
    this.title.setTitle(`${profile.fullName} · Portfólio`);
    this.meta.updateTag({
      name: 'description',
      content: profile.summary.slice(0, 180),
    });
  }
}
