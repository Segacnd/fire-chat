import { FC } from 'react';
import styles from './input.module.css';
import img from '../../shared/icons/img.svg';
import attach from '../../shared/icons/attach.svg';

export const Input: FC = () => {
  return (
    <div className={styles.input}>
      <input type='text' placeholder='add message' />
      <div className={styles.rightSide}>
        <img src={attach} alt='' />
        <input type='file' name='' id='file' style={{ display: 'none' }} />
        <label htmlFor='file'>
          <img src={img} alt='' />
        </label>
        <button type='button'>Send</button>
      </div>
    </div>
  );
};
