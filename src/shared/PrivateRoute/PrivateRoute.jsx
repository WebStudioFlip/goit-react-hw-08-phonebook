import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  const isLogin = useAuth();
  const location = useLocation();
  console.log('Priv',isLogin)
  if (!isLogin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};

export default PrivateRoute;
