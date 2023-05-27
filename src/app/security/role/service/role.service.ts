import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Privilege} from '../../privilege/model/privilege';
import {Role} from '../model/role';
import {User} from '../../../users/model/user';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private roleURL: string;

  constructor(private http: HttpClient) {
    this.roleURL = 'http://localhost:8080/role';
  }

  public findAll(): Observable<Role[]> {
    return this.http.get<Role[]>(this.roleURL);
  }

  // tslint:disable-next-line:typedef
  public save(role: Role) {
    return this.http.post<Role>(this.roleURL, role);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.roleURL}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public update(role: Role) {
    return this.http.put<Role>(this.roleURL, role);
  }

  // tslint:disable-next-line:typedef
  public getById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.roleURL}/${id}`);
  }

  public getUnassignedPrivileges(id: number): Observable<Privilege[]> {
    return this.http.get<Privilege[]>(`${this.roleURL}/unassignedprivileges/${id}`);
  }

  // tslint:disable-next-line:typedef
  public assignPrivilegesToRole(role: Role, privList: Privilege[]) {
    return this.http.post<Privilege[]>(`${this.roleURL}/assignprivileges/${role.id}`, privList);
  }

  // tslint:disable-next-line:typedef
  public unassignPrivilegesFromRole(role: Role, privList: Privilege[]) {
    return this.http.post<Privilege[]>(`${this.roleURL}/unassignprivileges/${role.id}`, privList);
  }

  // users
  public getUnassignedUsers(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.roleURL}/unassignedusers/${id}`);
  }

  // tslint:disable-next-line:typedef
  public assignUsersToRole(role: Role, userList: User[]) {
    return this.http.post<User[]>(`${this.roleURL}/assignusers/${role.id}`, userList);
  }

  // tslint:disable-next-line:typedef
  public unassignUsersFromRole(role: Role, userList: User[]) {
    return this.http.post<User[]>(`${this.roleURL}/unassignusers/${role.id}`, userList);
  }
}
