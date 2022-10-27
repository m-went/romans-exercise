import './App.scss';
import Routes from '../../routes';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <nav className="">
        <NavLink to="/" end>
          Users List
        </NavLink>
        <NavLink to="/add-user" end>
          Add User
        </NavLink>
      </nav>
      <Routes />
    </div>
  );
}

export default App;
