const Errors = {
  'auth/email-already-in-use': 'Email already in use !',
  'auth/invalid-email': 'Invalid email !',
  'auth/weak-password': 'Weak password !',
  'auth/wrong-password': 'Wrong password !',
  'auth/popup-closed-by-user': 'Popup closed by user !',
  'auth/redirect-cancelled-by-user': 'Redirect cancelled by user !',
  'auth/user-not-found': 'User not found !',
  'auth/user-disabled': 'User disabled !',
  'auth/invalid-api-key': 'Invalid API key !',
  'auth/network-request-failed': 'Network request failed !',
  'auth/too-many-requests': 'Too many requests, please wait !',
  'auth/popup-blocked': 'Popup blocked !',
  'auth/operation-not-allowed': 'Operation not allowed !',
};

const getAuthErrorMessage = (code) => {
  if (code in Errors) {
    return Errors[code];
  } else {
    return 'Unknown error !';
  }
};

export default getAuthErrorMessage;
