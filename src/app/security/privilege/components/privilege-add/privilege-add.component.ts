import { Component, OnInit } from '@angular/core';
import {UserType} from '../../../../user-types/model/user-type';
import {ActivatedRoute, Router} from '@angular/router';
import {UserTypesService} from '../../../../user-types/service/user-types.service';
import {Privilege} from '../../model/privilege';
import {PrivilegeService} from '../../service/privilege.service';

@Component({
  selector: 'app-privilege-add',
  templateUrl: './privilege-add.component.html',
  styleUrls: ['./privilege-add.component.css']
})
export class PrivilegeAddComponent implements OnInit {

  privilege: Privilege;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private privilegeService: PrivilegeService) {
    this.privilege = new Privilege();
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.privilegeService.save(this.privilege).subscribe(result => this.goToPrivilegeList());
  }

  // tslint:disable-next-line:typedef
  goToPrivilegeList() {
    this.router.navigate(['/privilege']);
  }

  ngOnInit(): void {
  }
}
