import styles from './UserListItem.module.scss';

function UserListItem(props) {
  const { name, attendance, average } = props.user;
  return (
    <div>
      <div className={`${styles.h1}`}>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </div>
  );
}

export default UserListItem;
