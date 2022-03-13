import { createContext, FC, useState } from "react";

interface IMenuProps {
  ispopout: boolean;
  handleChangePopout: () => void;
}

export const MenuContext = createContext<IMenuProps>({} as IMenuProps);

export const MenuContextProvider: FC = ({ children }) => {
  const [ispopout, setIsPopout] = useState(false);

  const handleChangePopout = (): void => {
    setIsPopout(!ispopout);
  };

  return (
    <MenuContext.Provider value={{ handleChangePopout, ispopout }}>
      {children}
    </MenuContext.Provider>
  );
};
