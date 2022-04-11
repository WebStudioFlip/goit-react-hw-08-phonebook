import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from './components/Loader';
import Section from './shared/Section';
import LayoutPage from './components/LayoutPage/LayoutPage';
import HomePage from './pages/HomePage/HomePage';
import PhonebookPage from './pages/PhonebookPage';
import PublicRoute from './shared/PublicRoute';
import PrivateRoute from './shared/PrivateRoute';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';

const Routers = () => {
  return (
    <Section>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route element={<PublicRoute />}>
              <Route path="signup" element={<RegisterPage />} />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="contacts" element={<PhonebookPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>      
    </Section>
  );
};

export default Routers;