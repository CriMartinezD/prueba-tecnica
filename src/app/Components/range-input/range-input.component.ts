import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/Services/data-form.service';

@Component({
  selector: 'app-range-input',
  templateUrl: './range-input.component.html',
  styleUrls: ['./range-input.component.css']
})
export class RangeInputComponent implements OnInit {

  constructor(private dataService:DataFormService) { }

  ngOnInit() {
  }

}
