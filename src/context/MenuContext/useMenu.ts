import { useContext } from "react";
import { MenuContext } from "./";

export const usePopout = () => {
  const data = useContext(MenuContext);
  return data;
};
