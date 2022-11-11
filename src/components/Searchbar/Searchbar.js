import { useState } from 'react';
import styles from './Searchbar.module.scss';
import useUsers from '../../hooks/useUsers';
import { useCombobox } from 'downshift';

function Searchbar(props) {
  const [foundUser, setFoundUser] = useState([]);
  const { findUsers } = useUsers();

  const searchUsers = async ({ inputValue }) => {
    const foundUsers = await findUsers(inputValue);
    setFoundUser(foundUsers);
  };

  const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    onInputValueChange: searchUsers,
    items: foundUser,
  });

  const foundList = foundUser.map((user, index) => {
    return (
      <li
        {...getItemProps({ user, index })}
        key={user.name}
        className={`${styles.searchResultsItem} ${highlightedIndex === index ? styles.highlighted : ''}`}
      >
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
        <input {...getInputProps()} type="text" placeholder="Find student" className={`${styles.searchbarInput}`} />
        <ul
          {...getMenuProps()}
          className={`${styles.searchResults} ${isOpen && foundList.length > 0 ? '' : styles.hidden}`}
        >
          {isOpen && foundList}
        </ul>
      </div>
    </div>
  );
}

export default Searchbar;
