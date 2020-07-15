import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/Services/data-form.service';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {

  constructor(private dataService:DataFormService) { }

  ngOnInit() {
  }

}
