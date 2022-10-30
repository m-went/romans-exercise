import React, { useState } from 'react';
import { users as usersData } from '../data/users';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

function UsersProvider({ children }) {
  const [users, setUsers] = useState(usersData);

  const deleteUser = (userToDelete) => {
    setUsers((st) => {
      return st.filter((user) => user.name !== userToDelete.name);
    });
  };

  const addUser = (newUser) => {
    setUsers((st) => [...users, newUser]);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export default UsersProvider;
