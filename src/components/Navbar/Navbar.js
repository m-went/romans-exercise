import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

function Navbar(props) {
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navHeader}`}>React Exercise</div>
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/group" end>
        Users List
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/add-user" end>
        Add User
      </NavLink>
    </nav>
  );
}

export default Navbar;
