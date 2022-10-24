import styles from './UserList.module.scss';
import { users } from '../../data/users';
import UserListItem from '../UserListItem/UserListItem';

function UserList(props) {
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
