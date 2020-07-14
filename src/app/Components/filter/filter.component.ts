import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() sectionFlags = new EventEmitter<Object>();
  private createVisible:boolean=true;
  private textSectionFlag:boolean=false;
  private dateSectionFlag:boolean=false;
  private rangeSectionFlag:boolean=false;
  
  private textDisabled:boolean=false;
  private dateDisabled:boolean=false;
  private rangeDisabled:boolean=false;

  constructor() { }

  ngOnInit() {
  }
  createForm(){
    this.textDisabled = true; 
    this.dateDisabled = true; 
    this.rangeDisabled = true; 
    let sections={
      textSectionFlag:this.textSectionFlag,
      dateSectionFlag:this.dateSectionFlag,
      rangeSectionFlag:this.rangeSectionFlag
    }
    this.createVisible=false;
    this.sectionFlags.emit(sections)

  }

}
