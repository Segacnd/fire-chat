import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './layout.module.css';

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};
