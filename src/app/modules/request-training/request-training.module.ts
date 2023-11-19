import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestTrainingComponent } from './request-training.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExModule } from 'src/app/shared/material.module';

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
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class RequestTrainingModule { }
