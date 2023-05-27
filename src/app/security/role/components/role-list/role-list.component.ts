import { Component, OnInit } from '@angular/core';
import {Privilege} from '../../../privilege/model/privilege';
import {PrivilegeService} from '../../../privilege/service/privilege.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Role} from '../../model/role';
import {RoleService} from '../../service/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Role[];
  closeResult = '';

  constructor(private roleService: RoleService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getRoles();
  }

  // tslint:disable-next-line:typedef
  getRoles() {
    this.roleService.findAll().subscribe(data => {
      this.roles = data;
    });
  }

  // tslint:disable-next-line:typedef
  deleteRole(id: number) {
    this.roleService.delete(id).subscribe(data => {
      this.getRoles();
    });
  }

  // tslint:disable-next-line:typedef
  editRole(id: number) {
    this.router.navigate(['editrole', id]);
  }

  // tslint:disable-next-line:typedef
  rolePrivileges(id: number) {
    this.router.navigate(['roleprivileges', id]);
  }

  // tslint:disable-next-line:typedef
  roleUsers(id: number) {
    this.router.navigate(['roleusers', id]);
  }

  // tslint:disable-next-line:typedef
  addRole() {
    this.router.navigate(['addrole']);
  }


  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteRole(id);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
