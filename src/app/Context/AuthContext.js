
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/FireBase/config";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
   
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); 
    });

   
    return () => {
      unsubscribe();
    };
  }, []);


  const signIn = (email, password) => {
    setError(null);
    return signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setError(err.message);
      throw err;
    });
  };

  const signUp = (email, password) => {
    setError(null);
    return createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      setError(err.message);
      throw err;
    });
  };

  const signInWithGoogle = () =>
    signInWithPopup(auth, new GoogleAuthProvider()).catch((err) => {
      setError(err.message);
      throw err;
    });

  const signOutUser = () => signOut(auth);

  return (
    <AuthContext.Provider
      value={{
        user,
        loadingAuthState: loading,
        error,
        signIn,
        signUp,
        signInWithGoogle,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
