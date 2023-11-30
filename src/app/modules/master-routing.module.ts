import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from '../core/layout/master-layout/master-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,

    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./our-services/our-services.module').then((m) => m.ServicesModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
      },
      {
        path: 'fill-out',
        loadChildren: () => import('./fill-out/fill-out.module').then((m) => m.FillOutModule)
      },
      {
        path: 'request-training',
        loadChildren: () => import('./request-training/request-training.module').then((m) => m.RequestTrainingModule)
      },
      {
        path: 'training-progress',
        loadChildren: () => import('./training-progress/training-progress.module').then((m) => m.TrainingProgressModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then((m) => m.OrderModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
