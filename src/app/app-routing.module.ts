import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserFormComponent} from './users/components/user-form/user-form.component';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {UserTypeListComponent} from './user-types/components/user-type-list/user-type-list.component';
import {UserTypeAddComponent} from './user-types/components/user-type-add/user-type-add.component';
import {UserTypeEditComponent} from './user-types/components/user-type-edit/user-type-edit.component';
import {UserTypeUsersComponent} from './user-types/components/user-type-users/user-type-users.component';
import {LoginComponent} from './users/components/login/login.component';
import {AuthGuardService} from './users/service/auth-guard.service';
import {PrivilegeListComponent} from './security/privilege/components/privilege-list/privilege-list.component';
import {PrivilegeAddComponent} from './security/privilege/components/privilege-add/privilege-add.component';
import {PrivilegeEditComponent} from './security/privilege/components/privilege-edit/privilege-edit.component';
import {RoleListComponent} from './security/role/components/role-list/role-list.component';
import {RoleAddComponent} from './security/role/components/role-add/role-add.component';
import {RoleEditComponent} from './security/role/components/role-edit/role-edit.component';
import {RolePrivilegesComponent} from './security/role/components/role-privileges/role-privileges.component';
import {RoleUsersComponent} from './security/role/components/role-users/role-users.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent, canActivate: [AuthGuardService]},
  {path: 'adduser', component: UserFormComponent, canActivate: [AuthGuardService]},
  {path: 'edituser/:id', component: UserEditComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},

  {path: 'usertypes', component: UserTypeListComponent, canActivate: [AuthGuardService]},
  {path: 'addusertype', component: UserTypeAddComponent, canActivate: [AuthGuardService]},
  {path: 'editusertype/:id', component: UserTypeEditComponent, canActivate: [AuthGuardService]},
  {path: 'usertypeusers/:id', component: UserTypeUsersComponent, canActivate: [AuthGuardService]},

  {path: 'privilege', component: PrivilegeListComponent, canActivate: [AuthGuardService]},
  {path: 'addprivilege', component: PrivilegeAddComponent, canActivate: [AuthGuardService]},
  {path: 'editprivilege/:id', component: PrivilegeEditComponent, canActivate: [AuthGuardService]},

  {path: 'role', component: RoleListComponent, canActivate: [AuthGuardService]},
  {path: 'addrole', component: RoleAddComponent, canActivate: [AuthGuardService]},
  {path: 'editrole/:id', component: RoleEditComponent, canActivate: [AuthGuardService]},
  {path: 'roleprivileges/:id', component: RolePrivilegesComponent, canActivate: [AuthGuardService]},
  {path: 'roleusers/:id', component: RoleUsersComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

