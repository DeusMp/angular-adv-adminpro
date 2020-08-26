import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { ChartDonaComponent } from './chart-dona/chart-dona.component';



@NgModule({
  declarations: [
    IncrementadorComponent, 
    ChartDonaComponent
  ],
  exports: [
    IncrementadorComponent,
    ChartDonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
