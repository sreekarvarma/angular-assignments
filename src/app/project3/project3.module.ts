import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project3RoutingModule } from './project3-routing.module';
import { Project3Component } from './project3.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    Project3Component
  ],
  imports: [
    CommonModule,
    Project3RoutingModule,
    MaterialModule
  ]
})
export class Project3Module { }
