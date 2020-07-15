import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFormService {
  text: string = ""
  range: number = 0;
  date: Date;

  constructor() { }
  //Función para obtener el json de visualización en HTML de forma "bonita"
  getDataHTML() {
    let dateToShow;
    //Control de campo vacio y conversión del campo date a la visualización deseada
    if (this.date == null || this.date == undefined) {
      dateToShow = "00/00/0000";
    } else {
        dateToShow = this.date.getUTCDate() + '/' + (this.date.getUTCMonth()+1) + '/' + this.date.getUTCFullYear();
    }
    //Generación de json de salida
    let dataform = {
      texto: this.text,
      fecha: dateToShow,
      cantidad: this.range.toString()
    }
    //Conversión del json a una forma bonita en HTML
    return JSON.stringify(dataform, null, 4)
      .replace(/ /g, '&nbsp;')
      .replace(/\n/g, '<br/>');
  }
  //Función para reiniciar las variables
  resetData() {
    this.text = ""
    this.range = 0;
    this.date = null;
  }
}
