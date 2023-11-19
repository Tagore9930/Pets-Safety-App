import { TrainingProgressComponent } from './training-progress.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: TrainingProgressComponent
  }
]

@NgModule({
  declarations: [
    TrainingProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class TrainingProgressModule { }
