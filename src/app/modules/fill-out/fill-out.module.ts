import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillOutComponent } from './fill-out.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExModule } from 'src/app/shared/material.module';

const routes: Routes = [
  {
    path: '',
    component: FillOutComponent
  }
]

@NgModule({
  declarations: [
    FillOutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule
  ]
})
export class FillOutModule { }
