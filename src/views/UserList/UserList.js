import styles from './UserList.module.scss';
import UserListItem from '../../components/UserListItem/UserListItem';
import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function UserList({ allUsers, deleteUser }) {
  const { id } = useParams();

  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get('/group').then((res) => setGroups(res.data));
  }, []);

  useEffect(() => {
    axios.get(`/group/${id}`).then((res) => setUsers(res.data));
  }, [id]);

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
