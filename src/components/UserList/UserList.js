import styles from './UserList.module.scss';
import { users } from '../../data/users';
import UserListItem from '../UserListItem/UserListItem';

function UserList(props) {
  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} />;
  });
  return (
    <div>
      <h1 className={styles.test}>There will be list of users! </h1>
      <ul>{usersList}</ul>
    </div>
  );
}

export default UserList;
