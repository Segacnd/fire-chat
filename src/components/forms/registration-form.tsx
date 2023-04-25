import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './form.module.css';

export const RegistrationForm: FC = () => {
  return (
    <form action='' className={styles.form}>
      <h3>Registration</h3>
      <input type='text' placeholder='Login' />
      <input type='text' placeholder='Email' />
      <input type='text' placeholder='Password' />
      <input type='file' name='upload' id='' className={styles.uploadImage} />
      <button type='submit'>Sign up</button>
      <p>
        You do have an account? <Link to='/signin'>Sign in</Link>
      </p>
    </form>
  );
};
