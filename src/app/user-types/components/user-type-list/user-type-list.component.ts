import {Component, OnInit} from '@angular/core';
import {User} from '../../../users/model/user';
import {UserService} from '../../../users/service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserType} from '../../model/user-type';
import {UserTypesService} from '../../service/user-types.service';

@Component({
  selector: 'app-user-type-list',
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent implements OnInit {

  userTypes: UserType[];
  closeResult = '';

  constructor(private userTypeService: UserTypesService,
              private route: ActivatedRoute,
              private router: Router,
              private modalService: NgbModal) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getUserTypes();
  }

  // tslint:disable-next-line:typedef
  getUserTypes() {
    this.userTypeService.findAll().subscribe(data => {
      this.userTypes = data;
    });
  }

  // tslint:disable-next-line:typedef
  deleteUserType(id: number) {
    this.userTypeService.delete(id).subscribe(data => {
      this.getUserTypes();
    });
  }

  // tslint:disable-next-line:typedef
  editUserType(id: number) {
    this.router.navigate(['editusertype', id]);
  }

  // tslint:disable-next-line:typedef
  addUserType() {
    this.router.navigate(['addusertype']);
  }

  // tslint:disable-next-line:typedef
  viewUsers(id: number) {
    this.router.navigate(['usertypeusers', id]);
  }

  // tslint:disable-next-line:typedef
  open(content, id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.deleteUserType(id);
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
