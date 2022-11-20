import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { useAuth } from '../../hooks/useAuth';

function Navbar(props) {
  const auth = useAuth();
  return (
    <nav className={`${styles.navbar}`}>
      <div className={`${styles.navHeader}`}>React Exercise</div>
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/group/:id">
        Users List
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/add-user" end>
        Add User
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="/notes" end>
        Notes
      </NavLink>
      <NavLink onClick={() => auth.signOut()}>Logout</NavLink>
    </nav>
  );
}

export default Navbar;
