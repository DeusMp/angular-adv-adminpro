import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chart-dona',
  templateUrl: './chart-dona.component.html',
  styles: [
  ]
})
export class ChartDonaComponent {
  
  @Input() title: string = 'Sin Titulo';
  @Input('labels') doughnutChartLabels: Label[] = ['label 1', 'label 2', 'label 3'];
  @Input('data') doughnutChartData: MultiDataSet = [ [10, 10, 10] ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    { backgroundColor: ['#cb2929','#2b65ce','#86cd13']}
  ]

    // events
    public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }
  
    public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
      console.log(event, active);
    }

}
