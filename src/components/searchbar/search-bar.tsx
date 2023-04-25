import { FC } from 'react';
import styles from './search-bar.module.css';

export const SearchBar: FC = () => {
  return (
    <div className={styles.searchBar}>
      <form action='' className={styles.searchForm}>
        <input type='text' placeholder='Find user' />
      </form>
    </div>
  );
};
