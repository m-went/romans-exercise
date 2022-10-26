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

  return (
    <div className="App">
      <UserList users={users} />
      <AddUserForm users={users} addUser={addUser} />
    </div>
  );
}

export default App;
