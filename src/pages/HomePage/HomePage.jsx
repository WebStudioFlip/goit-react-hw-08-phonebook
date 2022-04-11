import { useSelector, shallowEqual } from 'react-redux';
import { getIsLogin } from '../../components/redux/auth/auth-selectors';
import Section from '../../shared/Section';
import styles from './homePage.module.css';

const HomePage = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <Section>
      <h1 className={styles.title}>Welcome to the Phonebook!</h1>
      {!isLogin && (
        <p className={styles.text}>
          Go to the site under your{' '}
          <a href="/login">
            <b>Login</b>
          </a> {' , or '}
          <a href="/signup">           
            <b>Register</b>
          </a>{'! '}          
        </p>
      )}
    </Section>
  );
};

export default HomePage;