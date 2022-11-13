import styles from './UserListItem.module.scss';
import Button from '../DeleteUserButton/DeleteUserButton';
import Average from '../UserListAverage/UserListAverage';

function UserListItem(props) {
  const { name, attendance, average } = props.user;
  const { showUserDetails } = props;

  const handleClick = () => {
    showUserDetails(props.user);
  };

  return (
    <div onClick={handleClick} className={`${styles.userListItem}`}>
      <Average average={average} />
      <div className={`${styles.userData}`}>
        <p className={`${styles.name}`}>{name}</p>
        <p className={`${styles.attendance}`}>attendance: {attendance}</p>
      </div>
      <Button user={props.user} deleteUser={props.deleteUser} />
    </div>
  );
}

export default UserListItem;
