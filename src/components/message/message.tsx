import { FC } from 'react';
import styles from './message.module.css';

export const Message: FC = () => {
  return (
    <div className={`${styles.message} ${styles.messageOwner}`}>
      <div className={styles.imgWrapper}>
        <img src='' alt='' />
      </div>
      <div className={styles.messageContent}>
        <span>hello how are you?</span>
      </div>
    </div>
  );
};
