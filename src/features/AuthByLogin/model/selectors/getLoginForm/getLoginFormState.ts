import { StateSchema } from '@/app/providers/StoreProvider';
import { LoginSchema } from '../../types/loginSchema';

export const getLoginFormState = (state: StateSchema): LoginSchema => state?.loginForm;
