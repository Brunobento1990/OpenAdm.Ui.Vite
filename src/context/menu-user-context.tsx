import { createContext } from "react";

export const MenuUserContext = createContext({
  open: true,
  setOpen: () => {},
});
