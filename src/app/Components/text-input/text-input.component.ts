import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/Services/data-form.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {
  a:string=""
  constructor(private dataService:DataFormService) { }

  ngOnInit() {
  }

}
