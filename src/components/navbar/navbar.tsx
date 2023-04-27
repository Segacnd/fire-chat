import { FC } from 'react';
import { signOut } from 'firebase/auth';
import styles from './navbar.module.css';
import { auth } from '../../../firebase';
import { useAppDispatch } from '../../redux/store';
import { userActions } from '../../redux/slices/user-slice';
import { useAuth } from '../../shared/hooks/use-auth';

export const Navbar: FC = () => {
  const { userName, avatar } = useAuth();
  const dispatch = useAppDispatch();
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Sega Chat</span>
      <div className={styles.userInfo}>
        <div className={styles.imgWrapper}>
          <img src={avatar ? avatar : ''} alt='' />
        </div>
        <span className={styles.userName}>{userName}</span>
      </div>
      <button type='button' onClick={() => dispatch(userActions.removeUser())}>
        logout
      </button>
    </nav>
  );
};
