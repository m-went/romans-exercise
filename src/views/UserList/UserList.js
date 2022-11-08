import styles from './UserList.module.scss';
import UserListItem from '../../components/UserListItem/UserListItem';

function UserList({ users, deleteUser }) {
  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} deleteUser={deleteUser} />;
  });
  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.userList}`}>
        <h1 className={`${styles.title}`}>Students List</h1>
        <ul className={`${styles.users}`}>{usersList}</ul>
      </div>
    </div>
  );
}

export default UserList;
