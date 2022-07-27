import { createContext, ReactNode } from "react";
import { api } from "../services/api";

type SiginCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  signIn(credentials: SiginCredentials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function signIn({ email, password }: SiginCredentials) {
    try {
      const response = api.post("sessions", { email, password });
      console.log((await response).data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
