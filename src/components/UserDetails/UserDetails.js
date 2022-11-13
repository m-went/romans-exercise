import styles from './UserDetails.module.scss';
import Average from '../UserListAverage/UserListAverage';

function UserDetails({ user }) {
  return (
    <div className={`${styles.userDetails}`}>
      <Average average={user.average} isInModal={true} />
      <p className={`${styles.username}`}>{user.name}</p>
      <div className={`${styles.details}`}>
        <h3 className={`${styles.contentTitle}`}>Course:</h3>
        <p className={`${styles.course}`}>{user.course}</p>
        <h3 className={`${styles.contentTitle}`}>Average grades:</h3>
        {user.grades.map(({ subject, average }) => (
          <div className={`${styles.subject}`} key={subject}>
            <p className={`${styles.course}`}>{subject}</p>
            <Average average={average}>{average}</Average>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
