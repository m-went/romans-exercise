import styles from './App.module.scss';
import Routes from '../../routes';
import Navbar from '../Navbar/Navbar';

function App() {
  console.log(styles);
  return (
    <div className={`${styles.app}`}>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;

/* ogarnij do konca style navbara bocznego i chyba bedzie git */
