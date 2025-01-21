"use client";

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

// Tipe untuk data pengguna
type User = {
  isLoggedIn: boolean;
  isAdmin: boolean;
};

// Tipe untuk nilai context
type UserContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

// Inisialisasi context dengan nilai awal null
const UserContext = createContext<UserContextType | null>(null);

// Provider untuk UserContext
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ isLoggedIn: false, isAdmin: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook untuk menggunakan context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
