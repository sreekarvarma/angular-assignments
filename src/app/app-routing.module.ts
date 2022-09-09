import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  { path: 'proj1', loadChildren: () => import('./project1/project1.module').then(m => m.Project1Module) },
  { path: 'proj2', loadChildren: () => import('./project2/project2.module').then(m => m.Project2Module) },
  { path: 'proj3', loadChildren: () => import('./project3/project3.module').then(m => m.Project3Module) },
  { path: 'proj4', loadChildren: () => import('./project4/project4.module').then(m => m.Project4Module) },
  { path: 'proj5', loadChildren: () => import('./project5/project5.module').then(m => m.Project5Module) },
  { path: '' , redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
