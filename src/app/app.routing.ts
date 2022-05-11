import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./content/home/home.module').then((m) => m.HomeModule),
  },

  { path: '**', redirectTo: 'home' },
];

export const routes = RouterModule.forRoot(appRoutes);
