import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailSignin = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  });

  const authInfo = {
    user,
    loading,
    createUser,
    emailSignin,
    logOut,
    googleSignin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
