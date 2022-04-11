import { useSelector, shallowEqual } from 'react-redux';

import { getIsLogin } from '../../components/redux/auth/auth-selectors';

const useAuth = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return isLogin;
};

export default useAuth;