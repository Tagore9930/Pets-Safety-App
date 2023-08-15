import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './our-services.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialExModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterServicesComponent } from './filter-services/filter-services.component';
import { SericesDetialsComponent } from './serices-detials/serices-detials.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent
  }
]

@NgModule({
  declarations: [
    ServicesComponent,
    FilterServicesComponent,
    SericesDetialsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialExModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ServicesModule { }
