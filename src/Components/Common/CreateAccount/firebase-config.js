import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAVMbdPAIvCEppWlQGXPDeJaRnaM14StMY',
  authDomain: 'firelobby-d7e57.firebaseapp.com',
  databaseURL: 'https://firelobby-d7e57-default-rtdb.firebaseio.com',
  projectId: 'firelobby-d7e57',
  storageBucket: 'firelobby-d7e57.appspot.com',
  messagingSenderId: '711713984342',
  appId: '1:711713984342:web:ff95f9fca7ff59f17290f7',
  measurementId: 'G-BQTBZD42JM',
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
