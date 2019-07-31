import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGaurd implements CanActivate {

    constructor(private authService: AuthService, private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        router: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean> {
        return this.authService.user.pipe(map(user => {
            return !!user;
        }), tap(isAuth => {
            if (!isAuth) {
                this.router.navigate(['/auth']);
            }
        }));
    }
}
