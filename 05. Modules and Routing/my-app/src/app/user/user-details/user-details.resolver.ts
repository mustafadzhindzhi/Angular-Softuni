import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router"
import { Observable } from "rxjs";
import { User } from "src/app/types/user.js";
import { UserService } from "../user.service";


@Injectable({ providedIn: 'root' })

export class UserResolve implements Resolve<User> {
    constructor (private useService: UserService) {}
    resolve
        (route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot):
        User | Observable<User> | Promise<User> {
            const id = route.params['id'];
            return this.useService.getSingleUser(id);
    }
}