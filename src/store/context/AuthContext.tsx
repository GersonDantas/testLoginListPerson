import { Children, createContext, useState } from "react";
import { setCookie } from "nookies";
import Router from "next/router";

import { handleLogin } from "@services/authentication";
import { ContextProvider } from "./ListiningContext";
import { useEffect } from "react";

export type SignInData = {
  username: string;
  password: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: ContextProvider) {
  const [token, setToken] = useState<string | null>(null);

  const isAuthenticated = !!token;

  useEffect(() => {}, []);

  async function signIn({ username, password }: SignInData) {
    const { Authorization } = await handleLogin({
      username,
      password,
    });

    //saving user information
    setCookie( undefined,"Leadsoft.UserInformation", JSON.stringify({
        user: {
          username,
          password,
        },
        Authorization,
      }),
      {
        maxAge: 60 * 60 * 1, // 1 hour
      }
    );

    setToken(Authorization);

    Router.push("/Listining");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
