import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { PresenceService } from './presence.service';
import { UserActivity } from '../_models/userActivity';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();
  refreshPhoto: boolean = false;
  constructor(private http: HttpClient, private presenceService: PresenceService) { }

  login(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
          //To track login
          this.recordLoginAndLogout(user.username, true);
        }
      })
    )
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'account/register', model).pipe(
      map(response => {
        const user = response;
        if (user) {
          this.setCurrentUser(user);
          //To track login
          this.recordLoginAndLogout(user.username, true);
        }
      })
    )
  }

  setCurrentUser(user: User) {
    user.roles = [];
    const roles = this.getDecodedToken(user.token).role;
    Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUserSource.next(user);
    this.presenceService.createHubConnection(user);

    //To track login

    // console.log(user.username)
  }

  logout() {
    localStorage.removeItem('user');
    //To track logout 
    this.currentUser$.pipe(take(1)).subscribe({
      next: user => {

        if (user) {
          this.recordLoginAndLogout(user.username, false);
          // console.log(user.username)
        }
      }
    });

    this.currentUserSource.next(null);
    this.presenceService.stopHubConnection();
  }

  getDecodedToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }



  //To track login   logout 
  recordLoginAndLogout(user: string, loggedIn: boolean) {
    const currentTimeInUTC = new Date();
    const utcOffset = 330; // GMT +5:30
    // Calculate the time in India by adding the UTC offset
    //(utcOffset * 60 * 1000) converting in milliseconds 
    const currentTimeInIndia = new Date(currentTimeInUTC.getTime() + (utcOffset * 60 * 1000));
    const time = currentTimeInIndia.toISOString();
    const loginLogoutPair = {
      username: user,
      time,
      loggedIn,
    };
    const localitem = localStorage.getItem('loginLogoutHistory')
    // console.log(localitem)

    if (localitem) {
      const loginLogoutHistory = JSON.parse(localitem);
      loginLogoutHistory.push(loginLogoutPair);

      localStorage.setItem('loginLogoutHistory', JSON.stringify(loginLogoutHistory));
    }
    else {
      const newHistory = [loginLogoutPair]; // new array of login/logout pair
      localStorage.setItem('loginLogoutHistory', JSON.stringify(newHistory));

    }
    // console.log(loginLogoutPair)

  }
  getLoginLogoutHistory(): UserActivity[] | null {
    const localItem = localStorage.getItem('loginLogoutHistory');
    if (localItem) {
      const parsedData = JSON.parse(localItem);
      if (Array.isArray(parsedData)) {
        return parsedData as UserActivity[];
      }
    }
    return null;
  }

  // getLoginLogoutHistory(): UserActivity | null {
  //   const localitem = localStorage.getItem('loginLogoutHistory');
  //   // console.log(localitem)
  //   if (localitem) {
  //     return JSON.parse(localitem);
  //   }
  //   return null;
  // }
















  // // To Record login info 
  //   recordLogin(user: string) {
  //     const loginT = new Date().toISOString();
  //     return {
  //       username: user,
  //       loginTime: loginT
  //     };
  //   }
  //   // To Record logout info 
  //   recordLogout(user: string) {
  //     const logoutT = new Date().toISOString();
  //     return {
  //       username: user,
  //       logoutTime: logoutT,
  //     };

}











function getLoginLogoutHistory() {
  throw new Error('Function not implemented.');
}
// refreshProfilePhoto() {
//   this.refreshPhoto=true
// }

// getrefreshProfilePhoto(){ //the receiver component calls this function
//   return this.refreshPhoto //it returns as an observable to which the receiver funtion will subscribe
// }


