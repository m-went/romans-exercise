import styles from './UserList.module.scss';
import UserListItem from '../../components/UserListItem/UserListItem';

function UserList(props) {
  const { users } = props;
  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} deleteUser={props.deleteUser} />;
  });
  return (
    <div className={`${styles.userList}`}>
      <h1 className={`${styles.title}`}>Students List</h1>
      <ul className={`${styles.users}`}>{usersList}</ul>
    </div>
  );
}

export default UserList;
