import { createContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <NavContext.Provider value={{ isActive, toggle }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavContext;
