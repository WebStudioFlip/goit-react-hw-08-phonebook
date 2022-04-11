import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoaderComponent from '../Loader';
import { getIsLoading } from 'redux/auth/auth-selectors';
import { initialState } from './initialState';
import styles from './registerForm.module.css';

const RegisterForm = () => {
  const [form, setForm] = useState({ ...initialState });
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading, shallowEqual);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      form.name.trim() === '' ||
      form.email.trim() === '' ||
      form.password.trim() === ''
    ) {
      return toast.error('💩 Please fill in all fields!');
    } else if (form.password.length < 7) {
      return toast.info('Passwords must be at least 7 characters long!');
    }
    dispatch(signup(form));
    setForm({ ...initialState });
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          color="secondary"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className={styles.textField}
        />

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

        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Signup
        </Button>

        {isLoading && <LoaderComponent />}
      </form>
    </div>
  );
};

export default RegisterForm;