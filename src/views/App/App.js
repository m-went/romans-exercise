import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../../components/Navbar/Navbar';

function App() {
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
