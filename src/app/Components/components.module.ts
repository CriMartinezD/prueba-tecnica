import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeInputComponent } from './range-input/range-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { DataOutputComponent } from './data-output/data-output.component';



@NgModule({
  declarations: [RangeInputComponent, TextInputComponent, DateInputComponent, DataOutputComponent],
  imports: [
    CommonModule
  ],
  exports:
  [
    DateInputComponent,
    RangeInputComponent,
    DateInputComponent,
    DataOutputComponent
  ]
})
export class ComponentsModule { }
