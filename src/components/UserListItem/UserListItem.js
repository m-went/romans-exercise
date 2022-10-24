import styles from './UserListItem.module.scss';
import Button from '../UserListButton/UserListButton';

function UserListItem(props) {
  const { name, attendance, average } = props.user;
  return (
    <div className={`${styles.userListItem}`}>
      <div className={`${styles.h1}`}>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <Button />
    </div>
  );
}

export default UserListItem;
