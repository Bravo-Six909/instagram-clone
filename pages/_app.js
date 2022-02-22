import '../styles/globals.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';
import Login from '../components/Login/Login';

function MyApp({ Component, pageProps }) {

  const [user] = useAuthState(auth);
  if(!user) return <Login />;


  return <Component {...pageProps} />
}

export default MyApp
