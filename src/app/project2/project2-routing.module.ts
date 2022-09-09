import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project2Component } from './project2.component';

const routes: Routes = [{ path: '', component: Project2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Project2RoutingModule { }
