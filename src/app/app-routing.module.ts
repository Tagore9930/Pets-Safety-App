import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import("./modules/master.module").then((m) => m.MasterModule)
  },
  {
    path: 'login',
    loadChildren: () => import("./auth/login/login.module").then((m) => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import("./auth/register/register.module").then((m) => m.RegisterModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import("./auth/forgot-password/forgot-password.module").then((m) => m.ForgotPasswordModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
