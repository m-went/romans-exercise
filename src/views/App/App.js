import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import NewsSection from '../NewsSection/NewsSection';
import { useEffect, useState } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import axios from 'axios';
import useUsersList from '../../hooks/useUsersList';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
import useUsers from '../../hooks/useUsers';

function App() {
  const [users, addUser, addAllUsers, deleteUser] = useUsersList([]);
  const [isOpen, openModal, closeModal] = useModal(false);
  const [chosenUser, setChosenUser] = useState('');
  const { findUser } = useUsers();

  useEffect(() => {
    axios.get('/students').then((res) => {
      addAllUsers(res.data);
    });
  }, [addAllUsers]);

  const choseUser = async (user) => {
    const foundUser = await findUser(user.id);
    setChosenUser(foundUser);
  };

  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Searchbar users={users} />
      <Routes users={users} deleteUser={deleteUser} addUser={addUser} choseUser={choseUser} openModal={openModal} />
      {isOpen ? <Modal chosenUser={chosenUser} closeModal={closeModal} /> : null}
      <NewsSection />
    </div>
  );
}

export default App;
