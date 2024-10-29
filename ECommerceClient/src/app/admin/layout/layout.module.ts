import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CompenentsModule } from './compenents/compenents.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    CompenentsModule
  ],
  exports : [
    LayoutComponent
  ]
})
export class LayoutModule { }
