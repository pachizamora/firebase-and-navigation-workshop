import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // usuario autenticado
        setUser(user);
      } else {
        // usuario no autenticado
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return { user };
}
