import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { CompenentsModule } from './compenents/compenents.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    CompenentsModule
  ],
  exports: [
    LayoutModule
  ]
})
export class AdminModule { }
