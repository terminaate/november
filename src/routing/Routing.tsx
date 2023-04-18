import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PrivateRoutes from '@/routing/PrivateRoutes';
import { lazy } from 'react';
// import HomePage from '@/pages/HomePage';
const HomePage = lazy(() => import('@/pages/HomePage'));

const Routing = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode={'wait'}>
      <Routes location={location} key={location.pathname}>
        <Route element={<PrivateRoutes />}></Route>
        <Route index element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Routing;
