import { Children, createContext, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";

import { handleLogin } from "@services/authentication";
import { ContextProvider } from "./ListiningContext";
import { useEffect } from "react";
import { api } from "@services/api/clientSide";
import {SignInData} from "@myGlobaltypes/index";

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ContextProvider) {
  const [token, setToken] = useState<string | null>(null);

  const isAuthenticated = !!token;


  async function signIn({ username, password }: SignInData) {
    const { Authorization } = await handleLogin({
      username,
      password,
    });

    //saving user information in cookies
    setCookie(
      undefined,
      "Leadsoft.UserInformation",
      Authorization,   //convert for JSON.stringify
      {
        maxAge: 60 * 60 * 1, // 1 hour
      }
    );

    setToken(Authorization);

    api.defaults.headers["Authorization"] = Authorization;

    Router.push("/Listining");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
