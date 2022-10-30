import React from 'react';
import { users as usersData } from '../data/users';
import useUsersList from '../hooks/useUsersList';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

function UsersProvider({ children }) {
  const [users, addUser, deleteUser] = useUsersList(usersData);

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
