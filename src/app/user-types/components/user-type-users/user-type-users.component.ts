import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/model/user';
import {UserService} from '../../../users/service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserType} from '../../model/user-type';
import {UserTypesService} from '../../service/user-types.service';

@Component({
  selector: 'app-user-type-users',
  templateUrl: './user-type-users.component.html',
  styleUrls: ['./user-type-users.component.css']
})
export class UserTypeUsersComponent implements OnInit {

  users: User[];
  closeResult = '';
  userType: UserType;
  id: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private router: Router,
              private userTypeService: UserTypesService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.userType = new UserType();
    this.id = this.route.snapshot.params.id;
    this.userTypeService.getById(this.id).subscribe(data => {
      this.userType = data;
      this.users = this.userType.userList;
    });

  }
  goToUserTypeList(){
    this.router.navigate(['usertypes']);
  }


}
