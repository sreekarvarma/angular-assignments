import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project5RoutingModule } from './project5-routing.module';
import { Project5Component } from './project5.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    Project5Component,
  ],
  imports: [
    CommonModule,
    Project5RoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class Project5Module { }
