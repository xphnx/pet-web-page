import { classNames } from './classNames';

describe('classNames', () => {
  const cases: [[string, Record<string, boolean>, string[]], string][] = [
    [['', {}, []], ''],
    [['', { hover: true }, []], 'hover'],
    [['', {}, ['additionalClass']], 'additionalClass'],
    [['mainClass', {}, []], 'mainClass'],
    [['mainClass', { hover: true, draggable: false }, []], 'mainClass hover'],
    [['mainClass', { hover: true, draggable: false }, ['additionalClass']], 'mainClass additionalClass hover'],
    [
      ['mainClass', { hover: undefined, draggable: true }, ['additionalClass1', 'additionalClass2']],
      'mainClass additionalClass1 additionalClass2 draggable',
    ],
  ];

  test.each(cases)('Если входные параметры %j, то результат %s', (input, output) => {
    expect(classNames(...input)).toBe(output);
  });
});
