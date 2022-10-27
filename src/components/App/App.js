import './App.scss';
import UserList from '../UserList/UserList';
import AddUserForm from '../AddUserForm/AddUserForm';
import { users as usersData } from '../../data/users';
import { useState } from 'react';

function App() {
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
    <div className="App">
      <UserList users={users} deleteUser={deleteUser} />
      <AddUserForm users={users} addUser={addUser} />
    </div>
  );
}

export default App;
