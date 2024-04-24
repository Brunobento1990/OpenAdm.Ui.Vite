import { createContext } from "react";

export const MenuContext = createContext({
  open: true,
  setOpen: () => {},
});
