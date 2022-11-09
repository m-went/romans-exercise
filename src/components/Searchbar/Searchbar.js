import { useEffect, useState } from 'react';
import styles from './Searchbar.module.scss';

function Searchbar({ users }) {
  const [searchVal, setSearchVal] = useState('');
  const [foundUser, setFoundUser] = useState([]);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    if (searchVal !== '') {
      setFoundUser(() => {
        return users.filter((user) => {
          return user.name.toLowerCase().includes(searchVal.toLowerCase());
        });
      });
    } else {
      setFoundUser([]);
    }
  }, [searchVal, users]);

  const foundList = foundUser.map((user) => {
    return <li className={`${styles.searchResultsItem}`}>{user.name}</li>;
  });

  return (
    <div className={`${styles.searchbar}`}>
      <div className={`${styles.wrapper}`}>
        <p>Logged as:</p>
        <p className={`${styles.loggedUser}`}>Teacher</p>
      </div>
      <div className={`${styles.searchWrapper}`}>
        <input
          type="text"
          placeholder="Find student"
          value={searchVal}
          onChange={handleChange}
          className={`${styles.searchbarInput}`}
        />
        {foundUser.length === 0 ? '' : <ul className={`${styles.searchResults}`}> {foundList} </ul>}
      </div>
    </div>
  );
}

export default Searchbar;
