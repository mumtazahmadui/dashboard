import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-sales-traffic-chart',
  templateUrl: './sales-traffic-chart.component.html',
  styleUrls: ['./sales-traffic-chart.component.css']
})
export class SalesTrafficChartComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Travel', 'Hotel', 'Feul', 'Dining', 'Rental', 'Whotesale', 'Supplies', 'Others'];
  public pieChartData: SingleDataSet = [30, 15, 15, 12, 10, 8, 5, 5];
  public chartColors: Color[] = [{backgroundColor: ["#003f5c", "#374c80", "#7a5195", "#bc5090", "#ef5675", "#ff764a", "#ffa600", "#939dac"]}];
  public pieChartType: ChartType = 'doughnut';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
