"use client";

import { createContext, useState } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [t, setT] = useState(false);

  const openMenu = () => {
    setT(true);
  };

  const closeMenu = () => {
    setT(false);
  };

  return (
    <ToggleContext.Provider value={{ t, openMenu, closeMenu }}>
      <div>{children}</div>
    </ToggleContext.Provider>
  );
};
