import styles from './DeleteUserButton.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';

function DeleteUserButton(props) {
  const clickHandler = () => {
    props.deleteUser(props.user);
  };

  return (
    <button className={`${styles.button}`} onClick={clickHandler} data-testid={props.user.name}>
      <Icon />
    </button>
  );
}

export default DeleteUserButton;
