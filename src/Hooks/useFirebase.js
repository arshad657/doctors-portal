import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/Firebase.init"
import {getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";




function useFirebase() {

  //initialize firebase app
  initializeFirebase();

  const [user, setUser] = useState({})

  const auth = getAuth();

  const registerUser = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }

  const logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      } else{
        setUser({})
      }
    });
    return () => unsubscribe;
  },[])


  return {
    user, 
    registerUser,
    loginUser,
    logout
  }

}
export default useFirebase;