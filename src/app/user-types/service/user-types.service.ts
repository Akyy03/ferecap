import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../users/model/user';
import {UserType} from '../model/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypesService {

  private userTypesUrl: string;

  constructor(private http: HttpClient) {
    this.userTypesUrl = 'http://localhost:8080/usertypes';
  }

  public findAll(): Observable<UserType[]> {
    return this.http.get<UserType[]>(this.userTypesUrl);
  }

  // tslint:disable-next-line:typedef
  public save(userType: UserType) {
    return this.http.post<UserType>(this.userTypesUrl, userType);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.userTypesUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public update(userType: UserType) {
    return this.http.put<UserType>(this.userTypesUrl, userType);
  }

  // tslint:disable-next-line:typedef
  public getById(id: number): Observable<any> {
    return this.http.get(`${this.userTypesUrl}/${id}`);
  }
}
