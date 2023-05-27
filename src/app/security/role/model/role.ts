import {Privilege} from '../../privilege/model/privilege';
import {User} from '../../../users/model/user';

export class Role {
  id: number;
  name: string;
  privilegeList: Privilege[];
  userList: User[];
}
