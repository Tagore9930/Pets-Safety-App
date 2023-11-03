import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillOutComponent } from './fill-out.component';
import { RouterModule, Routes } from '@angular/router';

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
  ]
})
export class FillOutModule { }
