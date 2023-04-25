import { FC } from 'react';
import styles from './chat.module.css';
import camera from '../../shared/icons/video-icon.svg';
import add from '../../shared/icons/add-user-icon.svg';
import more from '../../shared/icons/dots-icon.svg';
import { Messages } from '../messages/messages';
import { Input } from '../input/input';

export const Chat: FC = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <p>Piter</p>
        <div className={styles.chatIcons}>
          <img src={camera} alt='' />
          <img src={add} alt='' />
          <img src={more} alt='' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
