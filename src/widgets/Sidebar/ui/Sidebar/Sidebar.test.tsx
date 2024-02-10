import { renderWithTranslations } from '@/shared/lib';
import { Sidebar } from './Sidebar';

import { fireEvent, screen } from '@testing-library/react';

describe('Button', () => {
  test('render', () => {
    renderWithTranslations(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslations(<Sidebar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(screen.getByTestId('toggle'));
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
