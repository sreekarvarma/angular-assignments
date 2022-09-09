import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAppComponent } from './customer-app/customer-app.component';
import { AddEditEmpComponent } from './employee-app/add-edit-emp/add-edit-emp.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component:  EmployeeAppComponent},
  { path: 'employee/update/:id', component:  AddEditEmpComponent},
  { path: 'customer', component:  CustomerAppComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Project1RoutingModule { }
