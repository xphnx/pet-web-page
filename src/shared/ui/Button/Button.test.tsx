import { Button, ButtonThemeEnum } from './Button';

import { render, screen } from '@testing-library/react';

describe('Button', () => {
  test('render', () => {
    render(<Button>Click</Button>);
    expect(screen.getByText(/click/i)).toBeInTheDocument();
  });

  test('ghost theme', () => {
    render(<Button theme={ButtonThemeEnum.GHOST}>Click</Button>);
    expect(screen.getByText(/click/i)).toHaveClass('ghost');
  });
});
