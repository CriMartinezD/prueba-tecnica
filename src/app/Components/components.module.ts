import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangeInputComponent } from './range-input/range-input.component';
import { TextInputComponent } from './text-input/text-input.component';
import { DateInputComponent } from './date-input/date-input.component';
import { DataOutputComponent } from './data-output/data-output.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule,MatInputModule, MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material'

@NgModule({
  declarations: [RangeInputComponent, TextInputComponent, DateInputComponent, DataOutputComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule, 
    MatInputModule,
    MatNativeDateModule,
  ],
  exports:
  [
    TextInputComponent,
    DateInputComponent,
    RangeInputComponent,
    DateInputComponent,
    DataOutputComponent,
    FilterComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es'},
  ],
})
export class ComponentsModule { }
