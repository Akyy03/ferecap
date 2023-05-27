import {Component, OnInit} from '@angular/core';
import {UserType} from '../../model/user-type';
import {ActivatedRoute, Router} from '@angular/router';
import {UserTypesService} from '../../service/user-types.service';
import {User} from '../../../users/model/user';

@Component({
  selector: 'app-user-type-edit',
  templateUrl: './user-type-edit.component.html',
  styleUrls: ['./user-type-edit.component.css']
})
export class UserTypeEditComponent implements OnInit {

  userType: UserType;
  id: number;

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
    this.userType = new UserType();
    this.id = this.route.snapshot.params.id;
    this.userTypesService.getById(this.id).subscribe(data => {
      this.userType = data;
    });
  }

}
