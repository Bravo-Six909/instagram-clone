import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDju9nnZD03excz57ipMMutonGW8CI5MjY",
  authDomain: "instagram-clone-1a509.firebaseapp.com",
  projectId: "instagram-clone-1a509",
  storageBucket: "instagram-clone-1a509.appspot.com",
  messagingSenderId: "786591193213",
  appId: "1:786591193213:web:35ee50128e4e87e1ba7914"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };