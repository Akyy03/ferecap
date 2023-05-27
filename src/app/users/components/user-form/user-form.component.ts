import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {UserType} from '../../../user-types/model/user-type';
import {UserTypesService} from '../../../user-types/service/user-types.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User;
  userTypes: UserType[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private userTypeService: UserTypesService) {
    this.user = new User();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  // tslint:disable-next-line:typedef
  gotoUserList() {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
    this.userTypeService.findAll().subscribe(data => {
      this.userTypes = data;
    });
  }
}
