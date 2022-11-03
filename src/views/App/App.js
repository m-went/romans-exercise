import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import { useContext } from 'react';
import { UsersContext } from '../../providers/UsersProvider';
import Searchbar from '../../components/Searchbar/Searchbar';

function App() {
  const { users } = useContext(UsersContext);
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Searchbar />
      <Routes users={users} />
    </div>
  );
}

export default App;
