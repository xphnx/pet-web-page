import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from '@/shared/config'

export const AppRouter = () => {
  return (
    <Suspense fallback={'...Loading'}>
        <Routes>
            {
                Object.values(routeConfig).map(({ element, path }) => <Route path={path} element={element} key={path}/>)
            }
        </Routes>
    </Suspense>
  )
}
