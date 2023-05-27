import { Component, OnInit } from '@angular/core';
import {Privilege} from '../../../privilege/model/privilege';
import {ActivatedRoute, Router} from '@angular/router';
import {PrivilegeService} from '../../../privilege/service/privilege.service';
import {Role} from '../../model/role';
import {RoleService} from '../../service/role.service';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.css']
})
export class RoleAddComponent implements OnInit {

  role: Role;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roleService: RoleService) {
    this.role = new Role();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.roleService.save(this.role).subscribe(result => this.goToRoleList());
  }

  // tslint:disable-next-line:typedef
  goToRoleList() {
    this.router.navigate(['/role']);
  }

  ngOnInit(): void {
  }

}
