import { useSelector, shallowEqual } from 'react-redux';
import { getIsLogin } from '../redux/auth/auth-selectors';
import styles from './header.module.css';
import HeaderMenu from '../HeaderMenu';
import UserInfo from '../UserInfo';
import AuthMenu from '../AuthMenu';

const HeaderBar = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <header>
    <nav className={styles.nav}>
      <HeaderMenu isLogin={isLogin} />
      {isLogin ? <UserInfo /> : <AuthMenu />}
    </nav>
    </header>
  );
};

export default HeaderBar;