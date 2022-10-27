import { Routes, Route } from 'react-router-dom';
import UserList from './components/UserList/UserList';
import AddUserForm from './components/AddUserForm/AddUserForm';
import { users as usersData } from './data/users';
import { useState } from 'react';

function AppRoutes(props) {
  const [users, setUsers] = useState(usersData);

  const addUser = (newUser) => {
    setUsers((st) => [...users, newUser]);
  };

  const deleteUser = (userToDelete) => {
    setUsers((st) => {
      return st.filter((user) => user.name !== userToDelete.name);
    });
  };
  return (
    <Routes>
      <Route path="/" element={<UserList users={users} deleteUser={deleteUser} />} />
      <Route path="add-user" element={<AddUserForm users={users} addUser={addUser} />} />
    </Routes>
  );
}

export default AppRoutes;
