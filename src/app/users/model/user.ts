import {UserType} from '../../user-types/model/user-type';
import {Role} from '../../security/role/model/role';

export class User {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  newPassword: string;
  userType: UserType;
  roleList: Role[];
}
