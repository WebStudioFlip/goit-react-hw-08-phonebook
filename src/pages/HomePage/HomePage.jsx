import { useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLogin } from '../../components/redux/auth/auth-selectors';
import Section from '../../shared/Section';
import styles from './homePage.module.css';

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HomePage = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <Section>
      <h1 className={styles.title}>Welcome to the Phonebook!</h1>
      {!isLogin && (
        <p className={styles.text}>
          Go to the site under your{' '}
          <NavLink className={getLinkClassName} to={'/login'}>
            <b>Login</b>
            </NavLink> {' , or '}
            <NavLink className={getLinkClassName} to={"/signup"}>           
            <b>Register</b>
            </NavLink>{'! '}          
        </p>
      )}
    </Section>
  );
};

export default HomePage;