import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexStroke
} from 'ng-apexcharts';

export type ChartOptions = {
  series: any | ApexAxisChartSeries;
  chart: any | ApexChart;
  xaxis: any | ApexXAxis;
  title: any | ApexTitleSubtitle;
  stroke: any | ApexStroke;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  sidebarOpen = false;

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }
  
  @ViewChild('chart') chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public orderChartOptions: Partial<ChartOptions>;


  constructor(private el: ElementRef, private renderer: Renderer2) {

    

    this.chartOptions = {
      series: [
        {
          name: 'Counts',
          data: [100, 66, 56, 74, 65, 110, 84, 65, 62, 160, 91, 210],
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
      },
      title: {
        text: 'Our monthly products count',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    };

    //Orders' Chart
    this.orderChartOptions = {
      series: [
        {
          name: 'Purchase',
          data: [100, 66, 56, 74, 65, 110, 84, 65, 62, 160, 91, 210],
        },
        {
          name: 'Sales',
          data: [220, 120, 89, 110, 200, 110, 220, 120, 94, 110, 180, 130 ]
        }
      ],
      chart: {
        height: 350,
        type: 'line',
      },
      title: {
        text: 'Total Sales and Orders',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      stroke: {
        curve: 'straight',
      }
    };
    
  }
}


