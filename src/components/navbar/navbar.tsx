import { FC } from 'react';
import { signOut } from 'firebase/auth';
import styles from './navbar.module.css';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../redux/store';
import { userActions } from '../../redux/slices/user-slice';

export const Navbar: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Sega Chat</span>
      <div className={styles.userInfo}>
        <div className={styles.imgWrapper}>
          <img src='' alt='' />
        </div>
        <span className={styles.userName}>User</span>
      </div>
      <button type='button' onClick={() => dispatch(userActions.removeUser)}>
        logout
      </button>
    </nav>
  );
};
