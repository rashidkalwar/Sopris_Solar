import {
  getAuth,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { toast } from 'react-hot-toast';
import { doc, setDoc } from 'firebase/firestore';

import firebaseApp, { db } from 'src/firebase/clientApp';
import getAuthErrorMessage from 'src/firebase/Context/authErrorCodes';

export const auth = getAuth(firebaseApp);

const saveUser = async (user) => {
  const userRef = doc(db, `users/${user.uid}`);
  const userData = {
    uid: user.uid,
    name: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    providerId: user.providerId,
    photoUrl: user.photoURL,
    creationDate: user.metadata.creationTime,
    lastSignInDate: user.metadata.lastSignInTime,
  };
  await setDoc(userRef, userData, { merge: true });
};

export const signInWithTwitter = () => {
  const promise = signInWithPopup(auth, new TwitterAuthProvider());
  return toast.promise(promise, {
    loading: 'Loading',
    success: (data) => {
      saveUser(data.user);
      return 'Successfully signed in with Twitter!';
    },
    error: (error) => {
      getAuthErrorMessage(error.code);
      console.error(error);
    },
  });
};

export const signInWithGoogle = () => {
  const promise = signInWithPopup(auth, new GoogleAuthProvider());
  return toast.promise(promise, {
    loading: 'Loading',
    success: (data) => {
      saveUser(data.user);
      return 'Successfully signed in with Google!';
    },
    error: (error) => {
      getAuthErrorMessage(error.code);
      console.error(error);
    },
  });
};

// To know more about toast and why passing promise to toast is important,
// https://react-hot-toast.com/docs/toast

export const createUserwithEmailPassword = (email, password) => {
  const promise = createUserWithEmailAndPassword(auth, email, password);
  return toast.promise(promise, {
    loading: 'Loading',
    // success: 'Successfully created account!',
    success: (data) => {
      saveUser(data.user);
      return 'Successfully created account!';
    },
    error: (error) => getAuthErrorMessage(error.code),
  });
};

export const signInWithEmailPassword = (email, password) => {
  const promise = signInWithEmailAndPassword(auth, email, password);
  return toast.promise(promise, {
    loading: 'Loading',
    success: 'Successfully signed in!',
    error: (error) => getAuthErrorMessage(error.code),
  });
};

export const logOut = () => signOut(auth);
