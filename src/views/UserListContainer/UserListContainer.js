import styles from './UserListContainer.module.scss';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useUsers from '../../hooks/useUsers';
import UsersList from '../../components/UsersList/UsersList';

function UserList({ deleteUser, showUserDetails }) {
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
      <UsersList deleteUser={deleteUser} showUserDetails={showUserDetails} users={users} />
    </div>
  );
}

export default UserList;
