import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CompenentsModule } from './compenents/compenents.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CompenentsModule,
    RouterModule
  ],
  exports : [
    LayoutComponent   
  ]
})
export class LayoutModule { }
