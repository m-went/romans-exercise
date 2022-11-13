import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './views/UserListContainer/UserListContainer';
import AddUserForm from './views/AddUserForm/AddUserForm';

function AppRoutes({ users, deleteUser, addUser, showUserDetails }) {
  return (
    <Routes>
      <Route
        path="/group/:id"
        element={<UserList showUserDetails={showUserDetails} allUsers={users} deleteUser={deleteUser} />}
      />
      <Route path="add-user" element={<AddUserForm addUser={addUser} />} />
      <Route path="*" element={<Navigate replace to="/group/A" />} />
    </Routes>
  );
}

export default AppRoutes;
