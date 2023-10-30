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
      type: 'line-scale-party',
      bdColor: 'rgba(255,255,255,0)',
      color: '#333333'
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
