import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './form-layout.module.css';
import { useAuth } from '../../../shared/hooks/use-auth';

export const FormLayout: FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAuth();
  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);
  return (
    <div className={styles.root}>
      <h1>Sega Chat</h1>
      <Outlet />
    </div>
  );
};
