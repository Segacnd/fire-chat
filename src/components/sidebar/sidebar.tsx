import { FC } from 'react';
import styles from './sidebar.module.css';
import { Navbar } from '../navbar/navbar';
import { SearchBar } from '../searchbar/search-bar';
import { ChatPreview } from '../chat-preview/chat-preview';

export const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Navbar />
      <SearchBar />
      <ChatPreview />
      <ChatPreview />
      <ChatPreview />
    </div>
  );
};
