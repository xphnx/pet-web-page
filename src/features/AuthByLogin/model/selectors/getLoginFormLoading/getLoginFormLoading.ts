import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading || false;
