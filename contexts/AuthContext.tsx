import React, { createContext, useState, useContext, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  register: (email: string, name: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, name: string) => {
    // Simulate login
    setUser({ email, name });
  };

  const logout = () => {
    setUser(null);
  };
  
  const register = (email: string, name: string) => {
    // Simulate register and login
    setUser({ email, name });
  };


  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
