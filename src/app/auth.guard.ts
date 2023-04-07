import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './service/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  id:string

  constructor(private session : SessionService, private router: Router) { }
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    console.log(this.session.getInfo());
    if (this.session.getInfo() == null) {
      this.id = this.session.getInfo();

      console.log("로그인 실패 : " + this.session.getInfo());
      return false;
    }

    console.log("로그인 성공 : " + this.session.getInfo());
    return true;
  }
}
