import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import NewsSection from '../NewsSection/NewsSection';
import { useEffect, useState } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
import useUsers from '../../hooks/useUsers';
import LoginForm from '../../components/LoginForm/LoginForm';

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [chosenUser, setChosenUser] = useState('');
  const { findUser } = useUsers();
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      (async () => {
        try {
          const response = await axios.get('/me', {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          setLoggedUser(response.data);
        } catch (e) {
          console.log(e);
        }
      })();
    }
  }, []);

  const handleSignIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', {
        login,
        password,
      });
      setLoggedUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  const AuthenticatedApp = () => {
    return (
      <div className={`${styles.app}`}>
        <Navbar />
        <Searchbar />
        <Routes showUserDetails={showUserDetails} />
        <Modal chosenUser={chosenUser} isOpen={isOpen} closeModal={closeModal} />
        <NewsSection />
      </div>
    );
  };

  const showUserDetails = async (user) => {
    const foundUser = await findUser(user.id);
    setChosenUser(foundUser);
    openModal();
  };
  return loggedUser ? <AuthenticatedApp /> : <LoginForm handleSignIn={handleSignIn} />;
}

export default App;
