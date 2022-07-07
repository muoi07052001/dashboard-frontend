import React, { createContext, ReactNode, useContext, useState } from 'react';
import { BaseSyntheticEvent } from 'react';

type ContextProviderProps = {
  children: ReactNode;
};

export type StateContextType = {
  activeMenu: boolean;
  setActiveMenu: any;
  isClicked: NavbarInterface;
  setIsClicked: any;
  handleClick: (clicked: string) => void;
  screenSize: number | undefined;
  setScreenSize: any;
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  setThemeSettings: any;
  setColor: (color: string) => void;
  setMode: (mode: BaseSyntheticEvent) => void;
};

interface NavbarInterface {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

export const StateContext = createContext<StateContextType | null>(null);

const initialState: NavbarInterface = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined); // To auto closing Sidebar if on Mobile
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false); // Is the Theme Settings Sidebar currently opened or closed

  const setMode = (e: BaseSyntheticEvent) => {
    setCurrentMode(e.target.value);

    localStorage.setItem('themeMode', e.target.value); // Save the progress -> After the user login again, the color remains

    setThemeSettings(false); // Auto close the Sidebar
  };

  const setColor = (color: string) => {
    setCurrentColor(color);

    localStorage.setItem('colorMode', color); // Save the progress -> After the user login again, the color remains;

    setThemeSettings(false); // Auto close the Sidebar
  };

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setColor,
        setMode,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
