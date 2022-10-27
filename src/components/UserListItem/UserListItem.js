import styles from './UserListItem.module.scss';
import Button from '../deleteUserButton/deleteUserButton';
import Average from '../UserListAverage/UserListAverage';

function UserListItem(props) {
  const { name, attendance, average } = props.user;
  return (
    <div className={`${styles.userListItem}`}>
      <Average average={average} />
      <div className={`${styles.userData}`}>
        <p className={`${styles.name}`}>{name}</p>
        <p className={`${styles.attendance}`}>attendance: {attendance}</p>
      </div>
      <Button deleteUser={props.deleteUser} user={props.user} />
    </div>
  );
}

export default UserListItem;
