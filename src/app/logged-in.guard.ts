import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {

  isLogged: boolean = false;
  constructor(private _UserService:UserService,private router:Router) {

    this._UserService.loggedStatus().subscribe((stat)=>{
      this.isLogged=stat;
  })
   }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isLogged)
      {
        return true;
      }
      else
      {
        alert("You must be Logged in");
        this.router.navigate(['/login']);
        return false;
      }
  }

}
