import { NavLink } from 'react-router-dom';
import { menuItems } from './menuItems';
import styles from './headerMenu.module.css';

const getActineLink = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HeaderMenu = ({ isLogin }) => {
  const showItems = isLogin ?  menuItems :  menuItems.filter(item => !item.private);
  const menu = showItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getActineLink} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.headerMenu}>{menu}</ul>;
};

export default HeaderMenu;