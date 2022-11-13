import styles from './UsersList.module.scss';
import UserListItem from '../UserListItem/UserListItem';

function UsersList({ users, deleteUser, showUserDetails }) {
  const usersList = users.map((user) => {
    return <UserListItem showUserDetails={showUserDetails} user={user} key={user.name} deleteUser={deleteUser} />;
  });

  return (
    <div className={`${styles.usersList}`}>
      <h1 className={`${styles.title}`}>Students List</h1>
      <ul className={`${styles.users}`}>{usersList}</ul>
    </div>
  );
}

export default UsersList;
