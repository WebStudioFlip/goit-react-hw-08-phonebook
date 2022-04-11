import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import defaultAvatar from './avatar.png';
import { logout } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import { getUser } from 'redux/auth/auth-selectors';
import styles from './userInfo.module.css';

const UserInfo = () => {
  const { name } = useSelector(getUser, shallowEqual);
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  return (
    <div className={styles.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={styles.avatar}
      />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserInfo;