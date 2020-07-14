import { Component, OnInit } from '@angular/core';
import { DataFormService } from 'src/app/Services/data-form.service';

@Component({
  selector: 'app-data-output',
  templateUrl: './data-output.component.html',
  styleUrls: ['./data-output.component.css']
})
export class DataOutputComponent implements OnInit {
  constructor(private dataService:DataFormService) { }

  ngOnInit() {
  }

}
