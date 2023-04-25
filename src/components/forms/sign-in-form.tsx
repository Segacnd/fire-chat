import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

export const SignInForm: FC = () => {
  return (
    <form action='' className={styles.form}>
      <h3>Authorization</h3>
      <input type='text' placeholder='email' />
      <input type='text' placeholder='password' />
      <button type='submit'>Sign in</button>
      <p>
        You dont have an account? <br /> <Link to='/registration'>Registration</Link>
      </p>
    </form>
  );
};
