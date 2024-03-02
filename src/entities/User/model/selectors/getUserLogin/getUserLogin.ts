import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserLogin = (state: StateSchema): string => state.user.authorizedUser.login;
