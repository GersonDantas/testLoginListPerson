import { Children, createContext, useState } from "react";
import { parseCookies, setCookie } from "nookies";
import Router from "next/router";

import { handleLogin } from "@services/api/authentication";
import { ContextProvider } from "./ListiningContext";
import { api } from "@services/api/clientSide";
import { SignInData } from "src/types/index";

type AuthContextType = {
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ContextProvider) {
  const [token, setToken] = useState<string | null>(null);

  async function signIn({ username, password }: SignInData) {
    const { Authorization } = await handleLogin({
      username,
      password,
    });

    //saving  token in cookies
    setCookie(
      undefined,
      "Leadsoft.Authorization",
      Authorization, //convert for JSON.stringify
      {
        maxAge: 60 * 60 * 1, // 1 hour
      }
    );

    const cookies = parseCookies(undefined);
    const cP = parseInt(cookies["Leadsoft.currentPage"])
    
    //saving current page defaults in cookies
    setCookie(
      undefined,
      "Leadsoft.currentPage",
      `${cP > 0 ? cP : 0}`, //if currentPage exist
      {
        expires: new Date( new Date().getFullYear() + 50, 1, 1  )
      }
    )
    
    //set token in defaults headers
    api.defaults.headers["Authorization"] = Authorization;
    setToken(Authorization);

    Router.push("/Listining");
  }

  return (
    <AuthContext.Provider value={{ signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
