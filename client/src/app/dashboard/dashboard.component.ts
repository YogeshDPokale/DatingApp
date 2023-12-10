import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import jsonData from '../charts/okcupid_profiles.json';
import { Data } from '../_models/datingData'
import { RelationStatusPieChartComponent } from '../charts/relation-status-pie-chart/relation-status-pie-chart.component';
import { SexPieChartComponent } from '../charts/sex-pie-chart/sex-pie-chart.component';
import { AgeBarChartComponent } from '../charts/age-bar-chart/age-bar-chart.component';
// import { readData } from './dataRead'
// import jsonData from './okcupid_profiles.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // jsonData: Data;
  ChartData: Data;
  @ViewChild('barchart1') ageBarChart: AgeBarChartComponent;
  @ViewChild(RelationStatusPieChartComponent) statusPieChart: RelationStatusPieChartComponent;
  @ViewChild(SexPieChartComponent) sexPieChart: SexPieChartComponent;
  constructor() {
    // ...
  }
  updateFromSexPieChart(gender: string) {
    // Filter the data based on the gender
    let sex = 'm';
    if (gender === 'female') {
      sex = 'female'
    }
    const filteredData = Object.values(jsonData).filter((profile) => {
      return profile.sex === sex;
    });
    console.log(filteredData)
    this.ChartData = filteredData as unknown as Data;
    this.ageBarChart.chart(this.ChartData)
    this.statusPieChart.chart(this.ChartData)
  }
  updateFromStatusPieChart(status: string) {
    // Filter the data based on the status
    const filteredData = Object.values(jsonData).filter((profile) => {
      return profile.status === status;
    });
    console.log(filteredData)
    this.ChartData = filteredData as unknown as Data;
    this.ageBarChart.chart(this.ChartData)
    this.sexPieChart.chart(this.ChartData)
  }
  // jData: Data = jsonData;
  updateFromBarChart(data: { x: string; y: number }) {
    const ageRange = data.x; // e.g., '20-30'
    const ageRangeParts = ageRange.split('-');
    const minAge = parseInt(ageRangeParts[0]);
    const maxAge = parseInt(ageRangeParts[1]);

    // Filter the data based on the age range
    const filteredData = Object.values(jsonData).filter((profile) => {
      const age = parseInt(profile.age);
      return !isNaN(age) && age >= minAge && age <= maxAge;
    });

    //filteredData contains profiles within the specified age range

    // console.log("Filtered Data:", filteredData);
    this.ChartData = filteredData as unknown as Data;
    // this.sendtoPieCharts.emit(this.pieChartData);
    this.sexPieChart.chart(this.ChartData)
    this.statusPieChart.chart(this.ChartData)
  }
  ngOnInit(): void {
    this.ChartData = jsonData as unknown as Data;

  }


}


