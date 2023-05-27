import { Component, OnInit } from '@angular/core';
import {User} from '../../../users/model/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../users/service/user.service';
import {UserType} from '../../model/user-type';
import {UserTypesService} from '../../service/user-types.service';

@Component({
  selector: 'app-user-type-add',
  templateUrl: './user-type-add.component.html',
  styleUrls: ['./user-type-add.component.css']
})
export class UserTypeAddComponent implements OnInit {

  userType: UserType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userTypesService: UserTypesService) {
    this.userType = new UserType();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userTypesService.save(this.userType).subscribe(result => this.gotoUserTypeList());
  }

  // tslint:disable-next-line:typedef
  gotoUserTypeList() {
    this.router.navigate(['/usertypes']);
  }

  ngOnInit(): void {
  }

}
