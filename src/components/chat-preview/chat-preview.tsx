import { FC } from 'react';
import styles from './chat-preview.module.css';

export const ChatPreview: FC = () => {
  return (
    <div className={styles.userChat}>
      <div className={styles.imgWrapper}>
        <img src='' alt='' />
      </div>
      <div className={styles.userChatInfo}>
        <span className={styles.userName}>Piter</span>
        <span className={styles.lastMessage}>ok mate</span>
      </div>
    </div>
  );
};
