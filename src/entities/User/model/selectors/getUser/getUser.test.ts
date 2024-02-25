import { StateSchema } from '@/app/providers/StoreProvider';
import { UserSchema } from '../../types/userSchema';
import { getUser } from './getUser';

import { DeepPartial } from '@reduxjs/toolkit';

describe('getUser', () => {
  const stateCase01: DeepPartial<StateSchema> = {
    user: {
      login: 'xphnx',
    },
  };

  const cases: [DeepPartial<StateSchema>, UserSchema][] = [[stateCase01, { login: 'xphnx' }]];

  test.each(cases)('Если входные параметры %j, то результат %s', (input, output) => {
    expect(getUser(input as StateSchema)).toEqual(output);
  });
});
