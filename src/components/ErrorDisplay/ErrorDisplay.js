import styles from './ErrorDisplay.module.scss';

const ErrorMessage = ({ message = 'Something went wrong. Please try again.' }) => {
  return (
    <div className={`${styles.error}`}>
      <h1 className={`${styles.errorHeader}`}> Oops! </h1>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
