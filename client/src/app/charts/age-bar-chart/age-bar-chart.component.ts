import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ApexCharts from 'apexcharts';
import { Data } from 'src/app/_models/datingData';
@Component({
  selector: 'app-age-bar-chart',
  templateUrl: './age-bar-chart.component.html',
  styleUrls: ['./age-bar-chart.component.css']
})
export class AgeBarChartComponent implements OnInit {
  @Output() sendBarToDashboard: EventEmitter<{ x: string, y: number }> = new EventEmitter();
  @Input() receivedData: Data;
  data: Data;
  isLoaded: boolean = false;
  chartObj: ApexCharts;
  ngOnInit() {
    this.chart(this.receivedData);
  }

  chart(Edata: Data) {
    const data = Object.values(Edata);

    const ageRanges = [
      { min: 18, max: 20 },
      { min: 20, max: 25 },
      { min: 25, max: 30 },
      { min: 30, max: 35 },
      { min: 35, max: 40 },
      { min: 40, max: 45 },
      { min: 45, max: 50 },
      { min: 50, max: 55 },
      { min: 60, max: 65 },
      { min: 65, max: 70 },
      { min: 70, max: 75 },
      { min: 75, max: 80 },
      { min: 80, max: 85 },

    ];

    // Initialize an object to store counts for each age range
    const ageRangeCounts: { [key: string]: number } = {};

    data.forEach((profile) => {
      const age = parseInt(profile.age);
      if (!isNaN(age)) {
        for (const range of ageRanges) {
          if (age >= range.min && age < range.max) {
            const key = `${range.min}-${range.max}`;
            ageRangeCounts[key] = (ageRangeCounts[key] || 0) + 1;
          }
        }
      }
    });

    // Convert the ageRangeCounts object into an array of objects
    const ageRangeData = Object.keys(ageRangeCounts).map((key) => ({
      x: key,
      y: ageRangeCounts[key],
    }));
    console.log(ageRangeData)
    this.showChart(ageRangeData)
  }
  showChart(chartdata: { x: string; y: number }[]) {
    const that = this;
    const options: ApexCharts.ApexOptions = {
      chart: {
        type: 'bar',
        height: '600',

        events: {
          click(event, chartContext, config) {
            that.sendBarToDashboard.emit(config.config.series[config.seriesIndex].data[config.dataPointIndex])
          },
        },
      },
      title: {
        text: 'Age Info',
      },
      plotOptions: {

        bar: {
          horizontal: false
        },
      },
      series: [{
        data: chartdata
      }],
      yaxis:
      {
        title: {
          text: "No.of.Users",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
          },
        },
      },
      xaxis:
      {
        title: {
          text: "Age Classes",
          style: {
            color: '#F31C1C',
            fontSize: '12px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
          },
        },

      },

    };

    if (!this.isLoaded) {
      this.chartObj = new ApexCharts(document.querySelector("#barChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(chartdata)

    }
    else {
      this.chartObj.destroy();
      this.chartObj = new ApexCharts(document.querySelector("#barChart"), options);

      this.chartObj.render();
      console.log(chartdata)
      // console.log(this.isLoaded)
    }
  }
}
