import { ReactNode, useEffect, useState } from "react";
import { ChildrenMain, Main } from "./styles";
import { Sidebar } from "../sidebar";
import { useNavigationApp } from "../../hooks/use-navigation-app";
import { HeaderApp } from "../header";
import { MenuContext } from "../../context/menu-context";
import { MenuUserContext } from "../../context/menu-user-context";
import { useLoader } from "@/components/loader";

interface propsLayout {
  children: ReactNode;
}

export function Layout(props: propsLayout) {
  const Loader = useLoader();
  const navigateApp = useNavigationApp();
  const [open, setOpen] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const init = () => {
      if (navigateApp.pathname === "/") {
        navigateApp.navigate("/home");
      }
    };
    init();
    const handleClickMenuUser = (event: any) => {
      const menuDiv = document.getElementById("menu-user");
      if (menuDiv && !menuDiv.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickMenuUser);

    return () => {
      document.removeEventListener("mousedown", handleClickMenuUser);
    };
  }, []);
  return (
    <MenuContext.Provider
      value={{
        open,
        setOpen: () => setOpen(!open),
      }}
    >
      <MenuUserContext.Provider
        value={{
          open: menuOpen,
          setOpen: () => setMenuOpen(!menuOpen),
        }}
      >
        <Main width={open ? "255px" : "60px"} id="main">
          <Sidebar />
          <ChildrenMain>
            <HeaderApp />
            <Loader.component />
            {props.children}
          </ChildrenMain>
        </Main>
      </MenuUserContext.Provider>
    </MenuContext.Provider>
  );
}
