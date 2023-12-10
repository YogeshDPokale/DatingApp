import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  busyReqCount = 0;
  constructor(private spinner : NgxSpinnerService) { }

  busy() {
    this.busyReqCount++;
    this.spinner.show(undefined, {
      type: 'ball-atom',
      fullScreen: true,
      bdColor: 'rgba(0, 0, 0, 0.2)',
      color: '#343aeb',
      size: 'medium',
    })
  }

  idle() {
    this.busyReqCount--;
    if (this.busyReqCount <= 0) {
      this.busyReqCount = 0;
      this.spinner.hide();
    }
  }
}
