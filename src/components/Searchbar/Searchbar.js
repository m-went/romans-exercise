import styles from './Searchbar.module.scss';

function Searchbar(props) {
  return (
    <div className={`${styles.searchbar}`}>
      <div className={`${styles.wrapper}`}>
        <p>Logged as:</p>
        <p className={`${styles.loggedUser}`}>Teacher</p>
      </div>
      <input type="text" placeholder="Find student" className={`${styles.searchbarInput}`} />
    </div>
  );
}

export default Searchbar;
