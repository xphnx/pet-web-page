import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Sidebar } from '@/widgets/Sidebar';
import './styles/index.scss';

export const App = () => {
    const { theme } = useTheme();
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-wrapper">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}