import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

let firebaseApp;

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
  projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
  appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
};

if (getApps().length) {
  firebaseApp = getApp();
} else {
  firebaseApp = initializeApp(clientCredentials);
}

export default firebaseApp;

export const db = getFirestore(firebaseApp);
