"use client";

import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
} from "react";

// Define the context value type
interface ContextProps {
  readonly isOpen: true | false;
  readonly setIsOpen: (isOpen: boolean) => void;
  readonly handleClose: () => void;
}

const SidebarContext = createContext<ContextProps>({} as ContextProps);

export const SidebarContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isOpen, setIsOpen] = useState<true | false>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
export const useProductContext = () => useContext(SidebarContext);
