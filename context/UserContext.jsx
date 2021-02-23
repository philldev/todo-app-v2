import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: null, isLoggedIn: false });

  let setUserLSValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(user) : value;
      // Save state
      setUser(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem("todo-user", JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  const signup = (username) => {
    setUserLSValue({ username, isLoggedIn: true });
  };
  const logout = () => {
    setUserLSValue({ username: null, isLoggedIn: false });
  };
  const edit = (newUsername) => {
    setUserLSValue(newUsername);
  };
  useEffect(() => {
    setUser(() => {
      try {
        // Get from local storage by key
        const item = window.localStorage.getItem("todo-user");
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : { username: null, isLoggedIn: false };
      } catch (error) {
        // If error also return initialValue
        console.log(error);
        return { username: null, isLoggedIn: false };
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, signup, logout, edit }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
