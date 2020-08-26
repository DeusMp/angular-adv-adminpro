import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public labels1: string[] = ['Ventas-Mostrador', 'En Almacen', 'OnLine-Ventas']
  public data1 = [
    [150, 800, 350],
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
