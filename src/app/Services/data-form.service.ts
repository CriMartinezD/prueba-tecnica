import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  text: string = ""
  range: number = 0;
  date: Date;

  constructor() { }
  getDataHTML() {
    let dataform = {
      texto: this.text,
      fecha: "00/00/0000",
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
