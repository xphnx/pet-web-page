import { classNames } from '@/shared/lib';
import { Navbar } from '@/widgets/Navbar';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import './styles/index.scss';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />

            <button onClick={toggleTheme}>Toggle theme</button>
            <AppRouter />
        </div>
    )
}