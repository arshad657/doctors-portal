import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Firebase/Firebase.init"
import {getAuth,signInWithPopup,updateProfile , createUserWithEmailAndPassword, signOut, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword} from "firebase/auth";


function useFirebase() {

  //initialize firebase app
  initializeFirebase();
  const [authError, setAuthError] = useState('')
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider()

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setAuthError('');
      const newUser = {email, displayName: name}
      setUser(newUser);
      //send name to firebase after creation
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
      }).catch((error) => {
      });
      navigate('/', {replace: true})

  })
  .catch((error) => {
    setAuthError(error.message)
    if(password.length < 6 ){
      alert("Your password should be atleast 6 characters")
    }

    // ..
  })
  .finally(()=> setIsLoading(false))
  }

  const logout = () => {
    setIsLoading(true)
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
    .finally(()=> setIsLoading(false))
  }

  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const destination = location.state?.from?.pathname || '/';
      console.log(destination)
      navigate(destination, {replace: true})
      
      setAuthError('')
    })
    .catch((error) => {
      setAuthError(error.message)

    })
    .finally(()=> setIsLoading(false))

  }

  const signInWithGoogle= (location, navigate) =>{
    setIsLoading(true)
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setAuthError('')

    }).catch((error) => {
      setAuthError(error.message)
    })
    .finally(()=> setIsLoading(false))

  }

  useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(user) {
        setUser(user);
      } else{
        setUser({})
      }
      setIsLoading(false)
    });
    return () => unsubscribe;
  },[])


  return {
    user, 
    isLoading,
    registerUser,
    loginUser,
    logout,
    signInWithGoogle,
    authError
  }

}
export default useFirebase;