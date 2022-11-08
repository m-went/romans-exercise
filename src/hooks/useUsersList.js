import { useState } from 'react';

function useUsersList(val = []) {
  const [users, setUsers] = useState(val);

  const deleteUser = (userToDelete) => {
    setUsers((st) => {
      return st.filter((user) => user.name !== userToDelete.name);
    });
  };

  const addUser = (newUser) => {
    setUsers((st) => [...users, newUser]);
  };

  const addAllUsers = (users) => {
    setUsers(users);
  };
  return [users, addUser, addAllUsers, deleteUser];
}

export default useUsersList;
