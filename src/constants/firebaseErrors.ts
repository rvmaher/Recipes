import {KeyPair} from '@typings/common';

const FIREBASE_ERRORS: KeyPair = {
  'auth/invalid-email': 'The email address is invalid.',
  'auth/email-already-in-use':
    'The email address is already in use by another account.',
  'auth/weak-password': 'The password is too weak.',
  'auth/user-not-found': 'The user account does not exist.',
  'auth/wrong-password': 'The password is incorrect.',
  'auth/invalid-credential': 'The sign-in credential is invalid.',
  'auth/user-disabled': 'The user account has been disabled.',
  'auth/too-many-requests':
    'Too many requests have been made to the Firebase Authentication service.',
  'auth/invalid-login':
    'The email address or password is incorrect, or the account has been disabled.',
  'auth/internal-error':
    'An unexpected error occurred while processing your request. Please try again later',
};

export {FIREBASE_ERRORS};
