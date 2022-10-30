import { Routes, Route } from 'react-router-dom';
import UserList from './views/UserList/UserList';
import AddUserForm from './views/AddUserForm/AddUserForm';

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="add-user" element={<AddUserForm />} />
    </Routes>
  );
}

export default AppRoutes;
