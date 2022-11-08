import { Routes, Route, Navigate } from 'react-router-dom';
import UserList from './views/UserList/UserList';
import AddUserForm from './views/AddUserForm/AddUserForm';

function AppRoutes({ users, deleteUser, addUser }) {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/group/A" />} />
      <Route path="/group/:id" element={<UserList allUsers={users} deleteUser={deleteUser} />} />
      <Route path="add-user" element={<AddUserForm addUser={addUser} />} />
    </Routes>
  );
}

export default AppRoutes;
