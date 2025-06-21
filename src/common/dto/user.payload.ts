import { UserRole } from 'src/modules/auth/role.enum';

export interface UserPayload {
  id: string;
  email: string;
  role: UserRole.ADMIN | UserRole.USER;
}
