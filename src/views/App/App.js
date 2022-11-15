import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import NewsSection from '../NewsSection/NewsSection';
import { useState } from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';
import Modal from '../../components/Modal/Modal';
import useModal from '../../hooks/useModal';
import useUsers from '../../hooks/useUsers';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../hooks/useAuth';

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [chosenUser, setChosenUser] = useState('');
  const { findUser } = useUsers();

  const auth = useAuth();

  const showUserDetails = async (user) => {
    const foundUser = await findUser(user.id);
    setChosenUser(foundUser);
    openModal();
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

  return auth.user ? <AuthenticatedApp /> : <LoginForm handleSignIn={auth.signIn} />;
}

export default App;
