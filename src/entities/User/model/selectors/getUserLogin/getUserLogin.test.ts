import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserLogin } from './getUserLogin';

import { DeepPartial } from '@reduxjs/toolkit';

describe('getUserLogin', () => {
  const stateCase01: DeepPartial<StateSchema> = {
    user: {
      authorizedUser: {
        login: 'xphnx',
      },
    },
  };

  const cases: [DeepPartial<StateSchema>, string][] = [[stateCase01, 'xphnx']];

  test.each(cases)('Если входные параметры %j, то результат %s', (input, output) => {
    expect(getUserLogin(input as StateSchema)).toEqual(output);
  });
});
