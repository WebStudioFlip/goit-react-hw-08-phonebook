import { NavLink } from 'react-router-dom';
import styles from './authMenu.module.css';

const navLinks = [
  {
    name: 'Register',
    href: '/signup',
  },
  {
    name: 'Login',
    href: '/login',
  },
];

const getLinkClassName = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const AuthMenu = () => {
  const authMenu = navLinks.map(({href, name}) => (
    <li key={href}>
      <NavLink className={getLinkClassName} to={href}>
        {name}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.nav}>
      <ul className={styles.authMenu}>{authMenu}</ul>
    </div>
  );
};

export default AuthMenu;