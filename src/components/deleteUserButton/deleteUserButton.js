import styles from './DeleteUserButton.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';
import { useContext } from 'react';
import { UsersContext } from '../../providers/UsersProvider';

function DeleteUserButton(props) {
  const { deleteUser } = useContext(UsersContext);
  const clickHandler = () => {
    deleteUser(props.user);
  };

  return (
    <button className={`${styles.button}`} onClick={clickHandler}>
      <Icon />
    </button>
  );
}

export default DeleteUserButton;
