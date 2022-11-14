import styles from './LoginForm.module.scss';
import { useForm } from 'react-hook-form';

function LoginForm({ handleSignIn }) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className={`${styles.loginForm}`}>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="login">Login:</label>
        <input type="text" name="login" id="login" {...register('login', { required: true })} />
      </div>
      <div className={`${styles.inputRow}`}>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" {...register('password', { required: true })} />
      </div>
      <button className={`${styles.button}`} type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
