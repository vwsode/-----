// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAp5S_BfyyiKu5cTBnq_I0CvLz0D8GzWm8',
  authDomain: 'login-page-2a6d6.firebaseapp.com',
  projectId: 'login-page-2a6d6',
  storageBucket: 'login-page-2a6d6.appspot.com',
  messagingSenderId: '870861172623',
  appId: '1:870861172623:web:c77dd4c0e4a8f75b50e5fa',
  measurementId: 'G-6NT146YMPP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
