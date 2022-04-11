import { useSelector, shallowEqual } from 'react-redux';
import { getIsLogin } from 'redux/auth/auth-selectors';
import Container from '../../components/Container/Container';
import styles from './homePage.module.css';

const HomePage = () => {
  const isLogin = useSelector(getIsLogin, shallowEqual);
  return (
    <Container>
      <h1 className={styles.title}>Welcome to the Phonebook!</h1>
      {!isLogin && (
        <p className={styles.text}>
          For using this Phonebook safely please get your own account on{' '}
          <a href="/signup">
            {' '}
            <b>Registration Page</b>
          </a>{' '}
          or just{' '}
          <a href="/login">
            <b>Login</b>
          </a>{' '}
          if your already have account.
        </p>
      )}
    </Container>
  );
};

export default HomePage;