import { createContext, ReactNode } from "react";

type SiginCredentials = {
  email: string;
  password: string;
};

type AuthContextData = {
  sigin(credentials: SiginCredentials): Promise<void>;
  isAuthenticated: boolean;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = false;

  async function sigin({ email, password }: SiginCredentials) {
    console.log(email, password);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, sigin }}>
      {children}
    </AuthContext.Provider>
  );
}
