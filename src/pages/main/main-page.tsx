import { FC } from 'react';
import { Chat } from '../../components/chat/chat';
import { Sidebar } from '../../components/sidebar/sidebar';
import styles from './main-page.module.css';

export const MainPage: FC = () => {
  return (
    <div className={styles.root}>
      <Sidebar />
      <Chat />
    </div>
  );
};
