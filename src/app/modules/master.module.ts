import { MaterialExModule } from './../shared/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { TrainingProgressComponent } from './training-progress/training-progress.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialExModule
  ]
})
export class MasterModule { }
