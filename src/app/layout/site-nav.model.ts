export interface SiteNavItem {
  readonly fragment: string;
  readonly label: string;
}

export const SITE_NAV_ITEMS: readonly SiteNavItem[] = [
  { fragment: 'sobre', label: 'Sobre' },
  { fragment: 'experiencia', label: 'Experiência' },
  { fragment: 'formacao', label: 'Formação' },
  { fragment: 'projetos', label: 'Projetos' },
  { fragment: 'habilidades', label: 'Habilidades' },
  { fragment: 'contato', label: 'Contato' },
] as const;
