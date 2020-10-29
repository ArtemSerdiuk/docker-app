import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home-page',
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
  },
  {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule),
  },
  {
    path: '**',
    redirectTo: 'home-page',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    useHash: true,
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
