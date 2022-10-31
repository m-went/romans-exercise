import { Routes, Route } from 'react-router-dom';
import UserList from './views/UserList/UserList';
import AddUserForm from './views/AddUserForm/AddUserForm';

function AppRoutes({ users }) {
  return (
    <Routes>
      <Route path="/" element={<UserList users={users} />} />
      <Route path="add-user" element={<AddUserForm />} />
    </Routes>
  );
}

export default AppRoutes;
