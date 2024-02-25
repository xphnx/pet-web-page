import { StateSchema } from '@/app/providers/StoreProvider';
import { UserSchema } from '../../types/userSchema';

export const getUser = (state: StateSchema): UserSchema => state.user;
