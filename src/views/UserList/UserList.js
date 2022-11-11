import styles from './UserList.module.scss';
import UserListItem from '../../components/UserListItem/UserListItem';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';

function UserList({ deleteUser }) {
  const { id } = useParams();
  const { getGroups, getUsers } = useUsers();

  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      const allGroups = await getGroups();
      setGroups(allGroups);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      const groupStudents = await getUsers(id);
      setUsers(groupStudents);
    })();
  }, [id, getUsers]);

  const usersList = users.map((user) => {
    return <UserListItem user={user} key={user.name} deleteUser={deleteUser} />;
  });

  const groupsList = groups.map((group) => {
    return (
      <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={`/group/${group}`} key={group}>
        {group}
      </NavLink>
    );
  });

  return (
    <div className={`${styles.componentWrapper}`}>
      <nav className={`${styles.groupHeader}`}>Group: {groupsList}</nav>
      <div className={`${styles.userList}`}>
        <h1 className={`${styles.title}`}>Students List</h1>
        <ul className={`${styles.users}`}>{usersList}</ul>
      </div>
    </div>
  );
}

export default UserList;
