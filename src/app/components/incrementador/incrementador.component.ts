import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  ngOnInit(){
    this.btnClass = `btn ${ this.btnClass }`;
  }

  // Se puede cambiar el nombre de la propiedad que recibe el hijo
  @Input('valor') progreso: number = 50;
  //@Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

/*   get getPorcentaje() {
    return `${this.progreso}%`;
  }
 */
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor >= 0) { 
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0) {     
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }    
    this.progreso = this.progreso + valor;
    this.valorSalida.emit( this.progreso );
  }

  onChange(nuevoValor: number) {
    console.log(nuevoValor);
    
    if ( nuevoValor > 100 ) {
      nuevoValor = 100;
    } else if ( nuevoValor < 0 ){
      nuevoValor = 0;
    }
    this.progreso = nuevoValor;
    this.valorSalida.emit(this.progreso);
  }

}
