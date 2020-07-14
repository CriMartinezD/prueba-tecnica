import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private textSectionFlag:boolean=false;
  private dateSectionFlag:boolean=false;
  private rangeSectionFlag:boolean=false;
  private sendVisible:boolean=false;
  private createVisible:boolean=true;
  private dataSectionFlag:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  getSectionsFlags(sectionsFlags){
    this.textSectionFlag=sectionsFlags.textSectionFlag;
    this.dateSectionFlag=sectionsFlags.dateSectionFlag;
    this.rangeSectionFlag=sectionsFlags.rangeSectionFlag;

    this.sendVisible=true;
  }
  sendForm(){
    this.textSectionFlag=false;
    this.dateSectionFlag=false;
    this.rangeSectionFlag=false;
    this.dataSectionFlag=true;
    this.sendVisible=false;
  }

}
