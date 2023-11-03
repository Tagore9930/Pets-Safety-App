import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTrainingComponent } from './request-training.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RequestTrainingComponent,
  }
]

@NgModule({
  declarations: [
    RequestTrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RequestTrainingModule { }
