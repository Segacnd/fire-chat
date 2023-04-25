import { FC } from 'react';
import styles from './navbar.module.css';

export const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Sega Chat</span>
      <div className={styles.userInfo}>
        <div className={styles.imgWrapper}>
          <img src='' alt='' />
        </div>
        <span className={styles.userName}>User</span>
      </div>
      <button type='button'>logout</button>
    </nav>
  );
};
