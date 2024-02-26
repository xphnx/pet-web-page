import { ReactNode } from 'react';
import { ThemeEnum, ThemeProvider } from '@/app/providers/ThemeProvider';

import { Story } from '@storybook/react';

export const ThemeDecorator =
  (theme: ThemeEnum) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): ReactNode =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
