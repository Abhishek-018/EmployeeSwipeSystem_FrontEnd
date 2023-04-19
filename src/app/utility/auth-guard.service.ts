import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _router:Router) { }

  canActivate():boolean {
    const employeeId = sessionStorage.getItem('employeeId')
    if (employeeId) {
      return true;
      
    }else{
      this._router.navigate(['/login'])
      return false;
    }
    
  }
}
