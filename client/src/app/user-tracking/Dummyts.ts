import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { AccountService } from '../_services/account.service';
import { UserActivity } from '../_models/userActivity';
@Component({
    selector: 'app-user-tracking',
    templateUrl: './user-tracking.component.html',
    styleUrls: ['./user-tracking.component.css']
})
export class UserTrackingComponent implements OnInit {
    data: UserActivity[] = [];

    constructor(private accountService: AccountService) {


    }
    ngOnInit(): void {

        const data = this.accountService.getLoginLogoutHistory();
        console.log(data)
        var chartdata: { x: string; y: number[] }[] = [];

        if (data) {
            for (let i = 0; i < data.length; i++) {

                if (data.loggedIn === true) {
                    for (let j = i + 1; j < data.length; j++) {
                        if (data.loggedIn === false) {
                            const logintimestamp = data[i].time;
                            const logouttimestamp = data[j].time;
                            const logindate = new Date(logintimestamp);
                            const logoutdate = new Date(logouttimestamp);

                            const loginhours = logindate.getUTCHours();
                            const loginminutes = (logindate.getUTCMinutes()) * (100 / 60) / 100; // 100/60 for getting minutes in 100s
                            const logouthours = logoutdate.getUTCHours();
                            const logoutminutes = (logoutdate.getUTCMinutes()) * (100 / 60) / 100; // /100 for convert into hrs.min(in 100s)
                            const loginTime = loginhours + loginminutes;
                            const logoutTime = logouthours + logoutminutes;

                            chartdata.push({
                                x: data.username, // You can customize the user ID as needed
                                y: [loginTime, logoutTime] // You can customize the data values as needed
                            });
                            break;
                        }
                    }
                }
            }
            this.showChart(chartdata);
        }
    }

    showChart(chartdata: { x: string; y: number[] }[]) {
        const options: ApexCharts.ApexOptions = {
            series: [
                {
                    data: chartdata
                }
            ],
            chart: {
                height: 630,
                type: 'rangeBar',
                zoom: {
                    enabled: false
                }
            },
            colors: ['#11F322', '#F31C1C'], //legend color ex. online,offilne
            plotOptions: {
                bar: {
                    horizontal: true,
                    isDumbbell: true,
                    dumbbellColors: [['#11F322', '#F31C1C']]  // line end point and start point color
                }
            },
            title: {
                text: 'User Activity'
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'left',
                customLegendItems: ['Online', 'Offline'],
            },

            fill: {
                type: 'gradient',
                gradient: {
                    gradientToColors: ['#36cb4a'], // Line color
                    inverseColors: false,
                    stops: [0, 0]
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            yaxis:
            {
                min: 0,
                max: 23,
                title: {
                    text: "Users",
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
                min: 0,
                max: 23,
                title: {
                    text: "Clock Time(Hrs)",
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

        const chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

    }
}
