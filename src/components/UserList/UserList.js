import styles from './UserList.module.scss';
import UserListItem from '../UserListItem/UserListItem';

function UserList(props) {
  const { users } = props;
  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} />;
  });
  return (
    <div className={`${styles.userList}`}>
      <ul className={`${styles.users}`}>{usersList}</ul>
    </div>
  );
}

export default UserList;
