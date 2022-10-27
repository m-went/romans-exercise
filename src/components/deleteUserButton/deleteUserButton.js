import styles from './deleteUserButton.module.scss';
import { ReactComponent as Icon } from '../../assets/icons/delete-icon.svg';

function deleteUserButton(props) {
  const clickHandler = () => {
    props.deleteUser(props.user);
  };

  return (
    <button className={`${styles.button}`} onClick={clickHandler}>
      <Icon />
    </button>
  );
}

export default deleteUserButton;
