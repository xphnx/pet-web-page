import { FC, Suspense } from 'react';
import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';
import { AppRouter } from './providers/router';

export const App: FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Navbar />
    <div className="content-wrapper">
      <Sidebar />
      <AppRouter />
    </div>
  </Suspense>
);
