import { FC } from 'react';
import { Message } from '../message/message';
import styles from './messages.module.css';

export const Messages: FC = () => {
  return (
    <div className={styles.messages}>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};
