import styles from './UserListItem.module.scss';

function UserListItem(props) {
  return (
    <div>
      <div className={`${styles.h1}`}>rating</div>
      <div>
        <p>Name</p>
        <p>Attendance</p>
      </div>
      <button>X</button>
    </div>
  );
}

export default UserListItem;
