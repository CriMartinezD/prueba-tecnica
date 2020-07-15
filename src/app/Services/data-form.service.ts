import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  text: string = ""
  range: number = 0;
  date: Date;

  constructor() { }
  getDataHTML() {
    console.log(this.date)
    console.log(this.date.getUTCMonth())
    let dateToShow;
    if (this.date == null || this.date == undefined) {
      dateToShow = "00/00/0000";
    } else {
      dateToShow = this.date.getUTCDate() + '/' + (this.date.getUTCMonth()+1) + '/' + this.date.getUTCFullYear();
    }
    let dataform = {
      texto: this.text,
      fecha: dateToShow,
      cantidad: this.range.toString()
    }
    return JSON.stringify(dataform, null, 4)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }
  resetData() {
    this.text = ""
    this.range = 0;
    this.date = null;
  }
}
