import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project2RoutingModule } from './project2-routing.module';
import { Project2Component } from './project2.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    Project2Component,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Project2RoutingModule,
    MaterialModule
  ]
})
export class Project2Module { }
