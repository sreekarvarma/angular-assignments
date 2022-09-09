import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project1RoutingModule } from './project1-routing.module';
import { CustomerAppComponent } from './customer-app/customer-app.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';
import { AddEditEmpComponent } from './employee-app/add-edit-emp/add-edit-emp.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerAppComponent,
    EmployeeAppComponent,
    AddEditEmpComponent
  ],
  imports: [
    CommonModule,
    Project1RoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class Project1Module { }
