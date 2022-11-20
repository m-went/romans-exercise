import styles from './DeleteUserButton.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';

function DeleteUserButton(props) {
  const clickHandler = () => {
    if (props.user) {
      props.deleteUser(props.user);
    } else if (props.removeNote) {
      props.removeNote();
    }
  };

  return (
    <button className={`${styles.button}`} onClick={clickHandler}>
      <Icon />
    </button>
  );
}

export default DeleteUserButton;
