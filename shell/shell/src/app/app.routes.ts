import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'remote',
    loadChildren: () => import('remote/Routes').then(m => m.remoteRoutes),
  },
  {
    path: 'remote2',
    loadChildren: () => import('remote2/Routes').then(m => m.remoteRoutes),
  }
];
