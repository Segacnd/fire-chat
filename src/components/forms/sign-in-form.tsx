import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './form.module.css';
import { auth } from '../../../firebase';
import { userActions } from '../../redux/slices/user-slice';
import { useAppDispatch } from '../../redux/store';

export const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password).then(({ user }) => {
        dispatch(
          userActions.setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
            avatar: user.photoURL,
            userName: user.displayName,
          })
        );
      });
    },
  });
  return (
    <form action='' onSubmit={formik.handleSubmit} className={styles.form}>
      <h3>Authorization</h3>
      <input
        type='text'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name='email'
        placeholder='email'
      />
      <input
        type='text'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        name='password'
        placeholder='password'
      />
      <button type='submit'>Sign in</button>
      <p>
        You dont have an account? <br /> <Link to='/registration'>Registration</Link>
      </p>
    </form>
  );
};
