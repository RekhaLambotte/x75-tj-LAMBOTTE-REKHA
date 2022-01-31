import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CantQuitFormComponent} from "../dashboard/component/cant-quit-form/cant-quit-form.component";

@Injectable({
  providedIn: 'root'
})
export class CanQuitMyFormGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: CantQuitFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canQuit();
  }

}
