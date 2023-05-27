import {Role} from '../../role/model/role';

export class Privilege {
  id: number;
  name: string;
  roleList: Role[];
}
