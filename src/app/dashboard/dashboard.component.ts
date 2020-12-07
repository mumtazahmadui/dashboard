import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  money = 6740.50;
  fbalnce = 2151.50;
  cLimit = 10000.00;

  legend = [
    { name: 'Travel', price: '$850.17 / 30%', class: 'color_1'},
    { name: 'Rental', price: '$1007.17 / 10%', class: 'color_2'},
    { name: 'Hotel', price: '$400.37 / 15%', class: 'color_3'},
    { name: 'Whotesale', price: '$850.17 / 8%', class: 'color_4'},
    { name: 'Feul', price: '$235.25 / 15%', class: 'color_5'},
    { name: 'Supplies', price: '$850.17 / 5%', class: 'color_6'},
    { name: 'Dining', price: '$120.17 / 12%', class: 'color_7'},
    { name: 'Others', price: '$850.17 / 5%', class: 'color_8'}
  ];

  chartData: MultiDataSet = [[30, 15, 15, 12, 10, 8, 5, 5]];
  chartLabels: Label[] = ['Travel', 'Hotel', 'Feul', 'Dining', 'Rental', 'Whotesale', 'Supplies', 'Others'];
  chartType: ChartType = 'doughnut';
  chartOptions: any = {
    rotation: 1 * Math.PI,
    tooltips: { enabled: true },
    legend: { display: false }
  }

  /*  options: any = {
     legend: { position: 'left', labels: { fontSize: 10, usePointStyle: true } }
   } */

  chartColors: Color[] = [{
    backgroundColor: ["#003f5c", "#374c80", "#7a5195", "#bc5090", "#ef5675", "#ff764a", "#ffa600", "#939dac"],
    hoverBackgroundColor: ["#003f5c", "#374c80", "#7a5195", "#bc5090", "#ef5675", "#ff764a", "#ffa600", "#939dac"]
  }];

  ngOnInit() {
  }

}
