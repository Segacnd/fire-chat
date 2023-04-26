import { FC, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import styles from './form.module.css';
import { auth, storage, db } from '../../../firebase';

export const RegistrationForm: FC = () => {
  const [avatar, setAvatar] = useState<File>();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      try {
        createUserWithEmailAndPassword(auth, values.email, values.password).then((data) => {
          const { user } = data;

          const storageRef = ref(storage, values.login);
          const uploadTask = uploadBytesResumable(storageRef, avatar);

          uploadTask.on('state_changed', () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
              await updateProfile(user, {
                displayName: values.login,
                photoURL: downloadUrl,
              });
              await setDoc(doc(db, 'users', user.uid), {
                uid: user.uid,
                login: values.login,
                email: values.email,
                avatar: downloadUrl,
              });
              await setDoc(doc(db, 'userChats', user.uid), {});
              navigate('/auth');
            });
          });
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <form action='' autoComplete='off' onSubmit={formik.handleSubmit} className={styles.form}>
      <h3>Registration</h3>
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.login}
        type='text'
        placeholder='Login'
        name='login'
      />
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        type='text'
        placeholder='Email'
        name='email'
      />
      <input
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type='text'
        placeholder='Password'
        name='password'
      />
      <input
        onChange={(event) => {
          if (event.currentTarget.files) {
            setAvatar(event.currentTarget.files[0]);
          }
        }}
        type='file'
        id=''
        className={styles.uploadImage}
      />
      <button type='submit'>Sign up</button>
      <p>
        You do have an account? <Link to='/signin'>Sign in</Link>
      </p>
    </form>
  );
};
