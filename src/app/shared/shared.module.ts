import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../filter.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [FilterPipe, DialogComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [FilterPipe]
})
export class SharedModule { }
