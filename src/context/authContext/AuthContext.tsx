import React, { createContext, useReducer, useState } from "react";
import { AuthReducer } from "./AuthReducer";
import { useStorage } from "../../utils/useStorage";

export interface AuthState {
  status: "checking" | "authenticated" | "not-authenticated";
  token?: string;
}

export const authInitialState: AuthState = {
  status: "checking",
};

export interface AuthContextProp {
  authState: AuthState;
  signIn: (token: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProp);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);
  const { clearConfigApp } = useStorage();
  const signIn = (token: string) => {
    dispatch({ type: "signIn", payload: { token } });
  };

  const signOut = async () => {
    dispatch({
      type: "signOut",
      payload: {
        token: undefined,
      },
    });
    await clearConfigApp();
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
