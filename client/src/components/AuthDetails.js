import React,{ useState,useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth"; 
import { auth } from "../ firebase";
import { useNavigate } from 'react-router-dom';

function AuthDetails() {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div>
        {authUser ? (
        <>
          { navigate('/userinfo') }
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  )
}

export default AuthDetails