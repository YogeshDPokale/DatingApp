import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';
import { Data } from 'src/app/_models/datingData';
@Component({
  selector: 'app-sex-pie-chart',
  templateUrl: './sex-pie-chart.component.html',
  styleUrls: ['./sex-pie-chart.component.css']
})
export class SexPieChartComponent implements OnInit {


  data: Data;
  @Input() receivedData: Data;
  isLoaded: boolean = false;
  chartObj: ApexCharts;

  ngOnInit(): void {
    this.chart(this.receivedData);
  }
  chart(Rdata:Data) {
    const data = Object.values(Rdata);

    // Initialize variables to count the gender categories
    let maleCount = 0;
    let femaleCount = 0;

    data.forEach((profile) => {
      const gender = profile.sex.toLowerCase(); // Ensure the gender values are in lowercase for consistency
      if (gender === 'm' || gender === 'male') {
        maleCount++;
      } else if (gender === 'f' || gender === 'female') {
        femaleCount++;
      }
    });

    // Create an array with the count of males and females
    const genderData = [maleCount, femaleCount];
    this.showChart(genderData)
  }

  showChart(genderData: number[]) {
    const options: ApexCharts.ApexOptions = {
      series: genderData,
      chart: {
        type: "pie",
        height: '300'

      },
      title: {
        text: 'Sex Info',
      },
      labels: ["Male", "Female"],

    };

    if (!this.isLoaded) {
      this.chartObj = new ApexCharts(document.querySelector("#sexChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(genderData)

    }
    else {
      this.chartObj.destroy();
      this.chartObj = new ApexCharts(document.querySelector("#sexChart"), options);

      this.chartObj.render();
      console.log(genderData)
      console.log(this.isLoaded)
    }
  }
}
