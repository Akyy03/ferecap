import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeUsersComponent } from './user-type-users.component';

describe('UserTypeUsersComponent', () => {
  let component: UserTypeUsersComponent;
  let fixture: ComponentFixture<UserTypeUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
