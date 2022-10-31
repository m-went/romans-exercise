import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import { useContext } from 'react';
import { UsersContext } from '../../providers/UsersProvider';

function App() {
  const { users } = useContext(UsersContext);
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Routes users={users} />
    </div>
  );
}

export default App;
