import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UserListComponent} from './users/components/user-list/user-list.component';
import {UserFormComponent} from './users/components/user-form/user-form.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {UserService} from './users/service/user.service';
import {UserEditComponent} from './users/components/user-edit/user-edit.component';
import {MenuComponent} from './common/components/menu/menu.component';
import {UserTypeListComponent} from './user-types/components/user-type-list/user-type-list.component';
import {UserTypeAddComponent} from './user-types/components/user-type-add/user-type-add.component';
import {UserTypeEditComponent} from './user-types/components/user-type-edit/user-type-edit.component';
import {UserTypeUsersComponent} from './user-types/components/user-type-users/user-type-users.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {LoginComponent} from './users/components/login/login.component';
import {HttpInterceptorService} from './users/service/http-interceptor.service';
import { PrivilegeListComponent } from './security/privilege/components/privilege-list/privilege-list.component';
import { PrivilegeAddComponent } from './security/privilege/components/privilege-add/privilege-add.component';
import { PrivilegeEditComponent } from './security/privilege/components/privilege-edit/privilege-edit.component';
import { RoleListComponent } from './security/role/components/role-list/role-list.component';
import { RoleAddComponent } from './security/role/components/role-add/role-add.component';
import { RoleEditComponent } from './security/role/components/role-edit/role-edit.component';
import { RolePrivilegesComponent } from './security/role/components/role-privileges/role-privileges.component';
import { RoleUsersComponent } from './security/role/components/role-users/role-users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    UserEditComponent,
    MenuComponent,
    UserTypeListComponent,
    UserTypeAddComponent,
    UserTypeEditComponent,
    UserTypeUsersComponent,
    LoginComponent,
    PrivilegeListComponent,
    PrivilegeAddComponent,
    PrivilegeEditComponent,
    RoleListComponent,
    RoleAddComponent,
    RoleEditComponent,
    RolePrivilegesComponent,
    RoleUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  providers: [UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
