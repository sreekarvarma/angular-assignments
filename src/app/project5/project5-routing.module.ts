import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project5Component } from './project5.component';

const routes: Routes = [{ path: '', component: Project5Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Project5RoutingModule { }
