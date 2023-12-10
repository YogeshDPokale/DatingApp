import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { map } from 'rxjs';
export const registerRoutepreventGuard: CanActivateFn = (route, state) => {
  
  const accountService = inject(AccountService)
  const router = inject(Router)
  // Check if the route is 'register' and prevent access

  return accountService.currentUser$.pipe(
    map((user: any) => {
      if (!user) return true;
      else {
        // toastr.error('You Shall Not....!')
        router.navigate(['/members']);

        return false;
      }
    })
  )
  // if (state.url.includes('register')) {
  //   router.navigate(['/members']);
  //   return false;
  // }

  // Allow access to other routes
  return true;
};
