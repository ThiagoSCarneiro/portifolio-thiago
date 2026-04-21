import type { PortfolioSnapshot } from './portfolio.models';

export const PORTFOLIO_SNAPSHOT: PortfolioSnapshot = {
  profile: {
    fullName: 'Thiago da Silva Carneiro',
    headline: 'Desenvolvedor',
    summary:
      'Desenvolvedor de sistemas em formação com foco em Java (Spring Boot). Experiência técnica no desenvolvimento de aplicações full-stack integrando Web, Mobile e Desktop com arquitetura de banco de dados SQL. Conhecimento em lógica de programação, consumo de APIs REST e controle de versão com Git/GitHub. Focado na resolução de problemas complexos e escalabilidade de software.',
    location: 'Salvador, BA',
    email: 'ts930201@gmail.com',
    phone: '(71) 9 8148-5466',
    phoneDialUrl: 'tel:+5571981485466',
    links: [
      { label: 'GitHub', url: 'https://github.com/ThiagoSCarneiro', kind: 'github' },
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thiago-da-silva-carneiro-51aa28199',
        kind: 'linkedin',
      },
      { label: 'Site', url: 'https://thiago-carneiro.vercel.app/', kind: 'web' },
      { label: 'E-mail', url: 'mailto:ts930201@gmail.com', kind: 'email' },
      { label: 'Telefone', url: 'tel:+5571981485466', kind: 'phone' },
    ],
  },
  experience: [
    {
      title: 'Jovem Aprendiz – Administrativo',
      company: 'Consórcio Salvador Transcard · Bilhetagem Automática',
      period: 'Setembro 2024 — Atualmente',
      bullets: [
        'Confecção de cartões de Vale-Transporte e organização dos cartões físicos.',
        'Atendimento ao cliente e suporte interno à operação de bilhetagem.',
        'Contagem e controle de estoque operacional de cartões.',
      ],
    },
  ],
  education: [
    {
      title: 'Análise e Desenvolvimento de Sistemas',
      institution: 'UCSal · Salvador, BA',
      detail: 'Previsão de conclusão: dezembro de 2027',
    },
    {
      title: 'Técnico em Desenvolvimento de Sistemas',
      institution: 'Senac BA',
      detail: 'Conclusão: novembro de 2025',
    },
  ],
  projects: [
    {
      name: 'Projeto Integrador Multiplataforma',
      context: 'Senac BA',
      highlights: [
        'Ecossistema Web, Mobile e Desktop com banco centralizado em MySQL.',
        'Autenticação e CRUD completo com integridade dos dados entre interfaces.',
        'Git/GitHub para versionamento e documentação técnica.',
      ],
    },
    {
      name: 'Venda Certa',
      context: 'Projeto pessoal',
      highlights: [
        'Ecossistema Web e Mobile com banco centralizado em MySQL.',
        'Autenticação, CRUD e consistência de dados entre canais.',
        'Versionamento e documentação com Git/GitHub.',
      ],
    },
  ],
  skills: [
    {
      category: 'Linguagens',
      items: ['Java', 'PHP', 'JavaScript'],
    },
    {
      category: 'Frameworks & libs',
      items: ['Spring Boot', 'Laravel', 'React', 'Angular'],
    },
    {
      category: 'Dados',
      items: ['MySQL', 'NoSQL'],
    },
    {
      category: 'Ferramentas',
      items: ['Git', 'GitHub', 'Figma (UI/UX)'],
    },
  ],
};
