import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './layout.module.css';
import { useAuth } from '../../../shared/hooks/use-auth';

export const Layout: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (!isAuth) {
      navigate('/signin');
    }
  }, [isAuth, navigate]);
  return (
    <div className={styles.layout}>
      <Outlet />
    </div>
  );
};
