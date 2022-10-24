import styles from './UserListButton.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';

function UserListButton(props) {
  return (
    <button className={`${styles.button}`}>
      <Icon />
    </button>
  );
}

export default UserListButton;
