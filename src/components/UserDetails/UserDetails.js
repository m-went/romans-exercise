import styles from './UserDetails.module.scss';
import Average from '../UserListAverage/UserListAverage';

function UserDetails({ user }) {
  return (
    <div className={`${styles.userDetails}`}>
      <Average average={user.average} isInModal={true} />
      <p className={`${styles.username}`}>{user.name}</p>
      <div className={`${styles.details}`}>
        <h3 className={`${styles.contentTitle}`}>Course:</h3>
        <p className={`${styles.course}`}>Course Title</p>
        <h3 className={`${styles.contentTitle}`}>Average grades:</h3>
      </div>
    </div>
  );
}

export default UserDetails;
