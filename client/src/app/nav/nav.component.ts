import { Component } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  model: any = {};


  constructor(public accountServices: AccountService, private router: Router,private toastr : ToastrService) {

  }
  ngOnInit(): void {
    // this.getCurrentUser()
    // this.currentUser$ = this.accountServices.currentUser$;
  }
  // getCurrentUser() {
  //   this.accountServices.currentUser$.subscribe({
  //     next: user => this.loggedIn = !!user,
  //     error: error => console.error()

  //   })
  // }
  login() {
    this.accountServices.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      // error: error => this.toastr.error(error.error)
      })

  }
  logout() {
    this.accountServices.logout();
    this.router.navigateByUrl('/')
  }
}


