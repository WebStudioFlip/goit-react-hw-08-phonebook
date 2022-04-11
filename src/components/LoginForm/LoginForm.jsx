import { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoaderComponent from '../Loader';
import { getIsLoading, getIsLogin } from '../../redux/auth/auth-selectors';
import { initialState } from './initialState';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [form, setForm] = useState({ ...initialState });
  const isLoading = useSelector(getIsLoading, shallowEqual);
  const isLogin = useSelector(getIsLogin, shallowEqual);
  const navigate = useNavigate();

  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin) {
      const from = location.state?.from || '/contacts';
      navigate(from);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.email.trim() === '' || form.password.trim() === '') {
      return toast.error('💩 Please fill in all fields!');
    } else if (form.password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(login(form));
    setForm({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        className={styles.textField}
      />

      <TextField
        label="Password"
        variant="outlined"
        color="secondary"
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        className={styles.textField}
      />

      {!isLoading && (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Login
        </Button>
      )}

      {isLoading && <LoaderComponent />}
    </form>
  );
};

export default LoginForm;