import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserResolve } from './user-details/user-details.resolver';
import { AuthGuard } from './user-details/user-details.quard';
@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{
      path: 'user/list',
      component: UserListComponent
    },
    {
      path: 'user/detail/:id', component: UserDetailsComponent,
      resolve: { user: UserResolve },
      canActivate: [AuthGuard]
    }
    ])
  ],
  exports: [UserListComponent, UserDetailsComponent]
})
export class UserModule { }
