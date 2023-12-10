import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginMode: boolean = false;
  registerMode = false;
  users: any;
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // this.getUsers();
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
    this.loginMode = false;
  }
  loginToggle() {
    this.loginMode = !this.loginMode;
    this.registerMode = false;
  }

  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe({
  //     next: res => this.users = res,
  //     error: error => console.log(error),
  //     complete: () => console.log("Request Completed ...!")

  //   })
  // }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }
  cancelLoginMode(event: boolean) {
    this.loginMode = event;

  }
}
