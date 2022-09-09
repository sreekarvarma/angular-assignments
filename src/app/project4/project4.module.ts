import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project4RoutingModule } from './project4-routing.module';
import { Project4Component } from './project4.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    Project4Component
  ],
  imports: [
    CommonModule,
    Project4RoutingModule,
    MaterialModule
  ]
})
export class Project4Module { }
