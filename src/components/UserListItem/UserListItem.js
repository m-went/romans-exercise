import styles from './UserListItem.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';

function UserListItem(props) {
  const { name, attendance, average } = props.user;
  return (
    <div className={`${styles.userListItem}`}>
      <div className={`${styles.h1}`}>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button className={`${styles.button}`}>
        <Icon />
      </button>
    </div>
  );
}

export default UserListItem;
