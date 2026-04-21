import { Injectable } from '@angular/core';

import { PORTFOLIO_SNAPSHOT } from '../data/portfolio.data';
import type { PortfolioSnapshot } from '../data/portfolio.models';

/**
 * Fonte única do conteúdo estático do portfólio.
 * Componentes de UI dependem desta abstração, não do arquivo de dados diretamente.
 */
@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  getSnapshot(): Readonly<PortfolioSnapshot> {
    return PORTFOLIO_SNAPSHOT;
  }
}
