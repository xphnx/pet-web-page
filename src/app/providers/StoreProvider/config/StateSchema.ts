import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByLogin';

export interface StateSchema {
  user: UserSchema;
  loginForm: LoginSchema;
}
