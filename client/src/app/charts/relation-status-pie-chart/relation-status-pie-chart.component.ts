import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import ApexCharts from 'apexcharts';
import { Data } from 'src/app/_models/datingData';
@Component({
  selector: 'app-relation-status-pie-chart',
  templateUrl: './relation-status-pie-chart.component.html',
  styleUrls: ['./relation-status-pie-chart.component.css']
})
export class RelationStatusPieChartComponent implements OnInit {
  @Input() receivedData: Data;
  @Output() sendStatusPieToDashboard: EventEmitter<string> = new EventEmitter();

  data: Data;
  chartObj: ApexCharts;
  isLoaded: boolean = false;
  ngOnInit(): void {
    this.chart(this.receivedData);
  }
  chart(Edata:Data) {
    const data = Object.values(Edata);

    // Initialize variables to count the relationship status categories
    let seeingSomeoneCount = 0;
    let singleCount = 0;
    let marriedCount = 0;
    let availableCount = 0;

    data.forEach((profile) => {
      const status = profile.status.toLowerCase(); // Ensure the status values are in lowercase for consistency
      if (status === 'seeing someone') {
        seeingSomeoneCount++;
      } else if (status === 'single') {
        singleCount++;
      } else if (status === 'married') {
        marriedCount++;
      } else if (status === 'available') {
        availableCount++;
      }
    });

    // Create an array of objects for the pie chart
    const relationshipStatusData = [
      seeingSomeoneCount, singleCount, marriedCount, availableCount
    ];
    this.showChart(relationshipStatusData)
  }
  showChart(relationshipStatusData: number[]) {

    const that = this;

    const options: ApexCharts.ApexOptions = {
      series: relationshipStatusData,
      chart: {
        type: "pie",
        height: '300',
        events: {
          dataPointSelection: function (event, chartContext, config) {
            that.sendStatusPieToDashboard.emit(['seeing someone', 'single', 'married', 'available'][config.dataPointIndex])
            // console.log(["Seeing Someone", "Single", "Married", "Available"][config.dataPointIndex]);
          },
        },
      },
      title: {
        text: 'Relation status',
      },
      labels: ["Seeing Someone", "Single", "Married", "Available"],


    };
    if (!this.isLoaded) {
      this.chartObj = new ApexCharts(document.querySelector("#relationChart"), options);
      this.chartObj.render();
      this.isLoaded = true;
      console.log(relationshipStatusData)

    }
    else {
      this.chartObj.destroy();
      this.chartObj = new ApexCharts(document.querySelector("#relationChart"), options);

      this.chartObj.render();
      console.log(relationshipStatusData)
      console.log(this.isLoaded)
    }
  }

}
