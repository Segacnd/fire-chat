import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Navigate } from 'react-router-dom';

import './index.css';
import { Provider } from 'react-redux';
import { SignIn } from './pages/auth/sign-in';
import { FormLayout } from './pages/auth/ui/form-layout';
import { Registration } from './pages/auth/registration';
import { MainPage } from './pages/main/main-page';
import { Layout } from './pages/main/ui/layout';
import { store } from './redux/store';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
      </Route>
      <Route element={<FormLayout />}>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/registration' element={<Registration />} />
      </Route>
      <Route path='*' element={<Navigate to='/ ' />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  </React.StrictMode>
);
