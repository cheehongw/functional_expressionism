// Use-auth.js. Adapted from https://usehooks.com/useAuth/

import React, { useEffect, useState } from "react";
import authHandling from "./AuthHandler";
import Loading from "./Loading/Loading";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [doneOnetimeSetup, setDoneOnetimeSetup] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    authHandling.auth().onAuthStateChanged((user) => {
      if (user != null) {
        if (user.emailVerified) {
          setCurrentUser(user);
          setDoneOnetimeSetup(user.photoURL !== null);
        } else {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setPending(false);
    });
  }, []);

  return pending ? (
    <Loading />
  ) : (
    <AuthContext.Provider
      value={{
        currentUser,
        doneOnetimeSetup,
        setDoneOnetimeSetup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
