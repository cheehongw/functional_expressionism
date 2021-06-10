// Use-auth.js. Adapted from https://usehooks.com/useAuth/

import React, { useEffect, useState } from "react";
import authHandling from "./AuthHandler";
import CircularProgress from "@material-ui/core/CircularProgress";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    authHandling.auth().onAuthStateChanged((user) => {
      if (user != null) {
        if (user.emailVerified) {
          setCurrentUser(user);
        }
      }
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      // Loading screen (to be done later)
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
