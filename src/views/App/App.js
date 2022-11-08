import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import NewsSection from '../NewsSection/NewsSection';
import { useEffect } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import axios from 'axios';
import useUsersList from '../../hooks/useUsersList';

function App() {
  const [users, addUser, addAllUsers, deleteUser] = useUsersList([]);

  useEffect(() => {
    axios.get('/students').then((res) => {
      addAllUsers(res.data);
    });
  }, []);

  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Searchbar />
      <Routes users={users} deleteUser={deleteUser} addUser={addUser} />
      <NewsSection />
    </div>
  );
}

export default App;
