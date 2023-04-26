import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBs4PV7XlMxqYnp0Gc7JjrqBI_NfYl8WkY',
  authDomain: 'fire-chat-2b80f.firebaseapp.com',
  projectId: 'fire-chat-2b80f',
  storageBucket: 'fire-chat-2b80f.appspot.com',
  messagingSenderId: '899676576885',
  appId: '1:899676576885:web:8efd8f4fedc1f3da1fac3c',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
