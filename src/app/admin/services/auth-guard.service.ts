import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate() {
    // todo 读取缓存，是否登录，登录返回true，没登录返回false，定向到login
    return true;
    // this.router.navigate(['/login']);
    // return false;
  }
}
