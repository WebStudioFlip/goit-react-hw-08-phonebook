import { NavLink } from 'react-router-dom';
import { items } from './items';
import styles from './headerMenu.module.css';

const getActineLink = ({ isActive }) =>
  isActive ? styles.active : styles.link;

const HeaderMenu = ({ isLogin }) => {
  const filteredItems = isLogin ? items : items.filter(item => !item.private);
  const lis = filteredItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getActineLink} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  return <ul className={styles.headerMenu}>{lis}</ul>;
};

export default HeaderMenu;