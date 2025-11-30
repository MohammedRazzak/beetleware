import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { ChartConfiguration } from 'chart.js';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statics-section',
  imports: [BaseChartDirective, TranslateModule],
  templateUrl: './statics-section.html',
  styleUrl: './statics-section.css',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticsSection {
  chartData: ChartConfiguration<'line'>['data'] = {
    labels: ['01:00AM', '02:00AM', '03:00AM', '04:00AM', '05:00AM', '06:00AM', '07:00AM', '08:00AM', '09:00AM', '10:00AM', '11:00AM'],
    datasets: [{
      data: [3000, 2000, 4500, 4000, 3500, 2500, 3000, 4000, 3500, 4500, 4000],
      fill: false,
      tension: 0.4,
      borderColor: '#2DD4BF',
      borderWidth: 2,
      pointRadius: [0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0],
      pointBackgroundColor: '#fff',
      pointBorderColor: '#2DD4BF',
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#2DD4BF',
      pointHoverBorderWidth: 2,
    }]
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: { top: 20 }
    },
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        grid: { color: '#e5e5e5', drawTicks: false },
        ticks: { color: '#9ca3af', font: { size: 10 }, padding: 10 },
        border: { display: false }
      },
      y: {
        grid: { color: '#e5e5e5', drawTicks: false },
        ticks: { color: '#9ca3af', font: { size: 10 }, padding: 10 },
        border: { display: false }
      }
    }
  };
}
