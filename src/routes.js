import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './views/UserListContainer/UserListContainer';
import AddUserForm from './views/AddUserForm/AddUserForm';

function AppRoutes({ users, showUserDetails }) {
  return (
    <Routes>
      <Route path="/group/:id" element={<UserList showUserDetails={showUserDetails} allUsers={users} />} />
      <Route path="add-user" element={<AddUserForm />} />
      <Route path="*" element={<Navigate replace to="/group/A" />} />
    </Routes>
  );
}

export default AppRoutes;
