import { useEffect, useState } from 'react';
import styles from './Searchbar.module.scss';
import useUsers from '../../hooks/useUsers';

function Searchbar(props) {
  const [searchVal, setSearchVal] = useState('');
  const [foundUser, setFoundUser] = useState([]);
  const { findUsers } = useUsers();

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  useEffect(() => {
    (async () => {
      const foundUsers = await findUsers(searchVal);
      setFoundUser(foundUsers);
    })();
  }, [searchVal, findUsers]);

  const foundList = foundUser.map((user) => {
    return (
      <li key={user.name} className={`${styles.searchResultsItem}`}>
        {user.name}
      </li>
    );
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
