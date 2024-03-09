import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '@/entities/User';
import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App: FC = () => {
  const { theme } = useTheme();
  const dispath = useDispatch();

  useEffect(() => {
    dispath(userActions.initAuthorizedUser());
  }, [dispath]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content-wrapper">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
