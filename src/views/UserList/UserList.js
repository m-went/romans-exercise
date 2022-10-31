import styles from './UserList.module.scss';
import UserListItem from '../../components/UserListItem/UserListItem';
import { useContext } from 'react';
import { UsersContext } from '../../providers/UsersProvider';

function UserList(props) {
  const { users } = useContext(UsersContext);
  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} />;
  });
  return (
    <div className={`${styles.userList}`}>
      <h1 className={`${styles.title}`}>Students List</h1>
      <ul className={`${styles.users}`}>{usersList}</ul>
    </div>
  );
}

export default UserList;
