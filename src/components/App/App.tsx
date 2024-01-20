import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import { MainPageLazy } from '../../pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from '../../pages/AboutPage/AboutPage.lazy';
import '../../styles/index.scss';
import { useTheme } from '../../theme/useTheme';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={'...Loading'}>
                <Routes>
                    <Route path='/' element={<MainPageLazy />} />
                    <Route path='/about' element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    )
}