import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormError = (state: StateSchema): string => state?.loginForm?.error || '';
