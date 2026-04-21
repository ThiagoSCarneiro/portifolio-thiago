import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/site-shell.component').then((m) => m.SiteShellComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/home/home-page.component').then((m) => m.HomePageComponent),
      },
    ],
  },
];
