import { cloneElement, createContext, useContext, useState } from "react";

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [open, setOpen] = useState("");

  const openWindow = (windowName) => setOpen(windowName);
  const closeWindow = () => setOpen("");

  return (
    <ModalContext.Provider value={{ open, openWindow, closeWindow }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, windowName }) => {
  const { openWindow } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => openWindow(windowName) });
};

const Window = ({ children, windowName, style }) => {
    
}
