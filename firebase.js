import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCxFDbWlAc7Zs0N_M-UDg1FNpYs3H267eI",
  authDomain: "instagram-c-82ac2.firebaseapp.com",
  projectId: "instagram-c-82ac2",
  storageBucket: "instagram-c-82ac2.appspot.com",
  messagingSenderId: "803940278514",
  appId: "1:803940278514:web:92908c3f29da12071db06b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// const authFacebook = getAuth(app);


export { auth };