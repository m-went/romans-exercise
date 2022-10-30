import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';
import UsersProvider from '../../providers/UsersProvider';

function App() {
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <UsersProvider>
        <Routes />
      </UsersProvider>
    </div>
  );
}

export default App;
