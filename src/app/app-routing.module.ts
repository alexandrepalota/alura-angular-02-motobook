import { LoginGuard } from './authentication/login.guard';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), // lazy load the component
    canLoad: [LoginGuard]
  },
  {
    path: 'bikes',
    loadChildren: () => import('./bikes/bikes.module').then((m) => m.BikesModule),
    canLoad: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
