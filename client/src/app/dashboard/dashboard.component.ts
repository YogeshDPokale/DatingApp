import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import jsonData from '../charts/okcupid_profiles.json';
import { Data } from '../_models/datingData'
import { RelationStatusPieChartComponent } from '../charts/relation-status-pie-chart/relation-status-pie-chart.component';
import { SexPieChartComponent } from '../charts/sex-pie-chart/sex-pie-chart.component';
// import { readData } from './dataRead'
// import jsonData from './okcupid_profiles.json';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // jsonData: Data;
  barChartData: Data;
  pieChartData: Data;
  @Output() sendtoPieCharts: EventEmitter<Data> = new EventEmitter();
  @ViewChild(RelationStatusPieChartComponent) statusPieChart: RelationStatusPieChartComponent;
  @ViewChild(SexPieChartComponent) sexPieChart: SexPieChartComponent;
  constructor() {
    // ...
  }
  // jData: Data = jsonData;
  updatePieChart(data: { x: string; y: number }) {
    const ageRange = data.x; // e.g., '20-30'
    const ageRangeParts = ageRange.split('-');
    const minAge = parseInt(ageRangeParts[0]);
    const maxAge = parseInt(ageRangeParts[1]);

    // Filter the data based on the age range
    const filteredData = Object.values(jsonData).filter((profile) => {
      const age = parseInt(profile.age);
      return !isNaN(age) && age >= minAge && age <= maxAge;
    });

    // Now `filteredData` contains profiles within the specified age range

    // console.log("Filtered Data:", filteredData);
    this.pieChartData = filteredData as unknown as Data;
    // this.sendtoPieCharts.emit(this.pieChartData);
    this.sexPieChart.chart(this.pieChartData)
    this.statusPieChart.chart(this.pieChartData)
  }
  ngOnInit(): void {
    this.pieChartData = jsonData as unknown as Data;
    this.barChartData = jsonData as unknown as Data;

  }


}


