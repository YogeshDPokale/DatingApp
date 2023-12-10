import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() cancelLogin = new EventEmitter();

  model: any = {};
  constructor(public accountServices: AccountService, private router: Router, private toastr: ToastrService) {

  }
  ngOnInit(): void {
    // this.getCurrentUser()
    this.accountServices.currentUser$ = this.accountServices.currentUser$;
  }

  login() {
    this.accountServices.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      // error: error => this.toastr.error(error.error)
    })

  }

  cancel() {
    this.cancelLogin.emit(false);
  }

}
