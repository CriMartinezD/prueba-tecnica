import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private textSectionFlag: boolean;
  private dateSectionFlag: boolean;
  private rangeSectionFlag: boolean;
  private sendVisible: boolean;
  private createVisible: boolean;
  private dataSectionFlag: boolean;
  constructor() { }

  ngOnInit() {
    this.textSectionFlag = false;
    this.dateSectionFlag = false;
    this.rangeSectionFlag = false;
    this.sendVisible = false;
    this.createVisible = true;
    this.dataSectionFlag = false;
  }
  getSectionsFlags(sectionsFlags) {
    this.textSectionFlag = sectionsFlags.textSectionFlag;
    this.dateSectionFlag = sectionsFlags.dateSectionFlag;
    this.rangeSectionFlag = sectionsFlags.rangeSectionFlag;

    this.sendVisible = true;
  }
  sendForm() {
    this.textSectionFlag = false;
    this.dateSectionFlag = false;
    this.rangeSectionFlag = false;
    this.dataSectionFlag = true;
    this.sendVisible = false;
  }

}
