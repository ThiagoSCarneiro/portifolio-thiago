import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <header class="sh">
      @if (eyebrow(); as e) {
        <p class="sh__eyebrow">{{ e }}</p>
      }
      <h2 class="sh__title" [attr.id]="anchorId() ?? null">{{ title() }}</h2>
      @if (subtitle(); as s) {
        <p class="sh__subtitle">{{ s }}</p>
      }
    </header>
  `,
  styles: `
    :host {
      display: block;
    }

    .sh__eyebrow {
      margin: 0 0 0.35rem;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--color-accent);
    }

    .sh__title {
      margin: 0 0 0.5rem;
      font-size: clamp(1.35rem, 2.5vw, 1.75rem);
      font-weight: 650;
      letter-spacing: -0.02em;
      color: var(--color-text);
    }

    .sh__subtitle {
      margin: 0;
      max-width: 52ch;
      font-size: 0.95rem;
      line-height: 1.55;
      color: var(--color-muted);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeadingComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
  readonly eyebrow = input<string>();
  readonly anchorId = input<string>();
}
