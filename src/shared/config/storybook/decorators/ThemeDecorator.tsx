import { ReactNode } from 'react';
import { ThemeEnum, ThemeProvider } from '@/app/providers/ThemeProvider';

import { Story } from '@storybook/react';

export const ThemeDecorator =
  (theme: ThemeEnum) =>
  (StoryComponent: Story): ReactNode =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
