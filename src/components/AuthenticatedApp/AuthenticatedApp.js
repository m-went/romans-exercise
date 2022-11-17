import styles from './AuthenticatedApp.module.scss';
import Searchbar from '../../components/Searchbar/Searchbar';
import Modal from '../Modal/Modal';
import Routes from '../../routes';
import Navbar from '../Navbar/Navbar';
import NewsSection from '../../views/NewsSection/NewsSection';

function AuthenticatedApp({ showUserDetails, chosenUser, isOpen, closeModal }) {
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Searchbar />
      <Routes showUserDetails={showUserDetails} />
      <Modal chosenUser={chosenUser} isOpen={isOpen} closeModal={closeModal} />
      <NewsSection />
    </div>
  );
}

export default AuthenticatedApp;
