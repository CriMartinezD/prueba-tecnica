import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DataFormService } from 'src/app/Services/data-form.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() sectionFlags = new EventEmitter<Object>();
  @Output() onReset = new EventEmitter<Object>();
  private createVisible: boolean = true;
  private textSectionFlag: boolean = false;
  private dateSectionFlag: boolean = false;
  private rangeSectionFlag: boolean = false;

  private textDisabled: boolean = false;
  private dateDisabled: boolean = false;
  private rangeDisabled: boolean = false;

  constructor(private dataService:DataFormService) { }

  ngOnInit() {
  }
  createForm() {
    this.textDisabled = true;
    this.dateDisabled = true;
    this.rangeDisabled = true;
    let sections = {
      textSectionFlag: this.textSectionFlag,
      dateSectionFlag: this.dateSectionFlag,
      rangeSectionFlag: this.rangeSectionFlag
    }
    this.createVisible = false;
    this.sectionFlags.emit(sections)

  }
  restart() {
    this.textDisabled = false;
    this.dateDisabled = false;
    this.rangeDisabled = false;
    this.createVisible = true;
    this.dataService.resetData();
    this.onReset.emit(true);
  }

}
