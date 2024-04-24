import { useContext } from "react";
import * as Styled from "./styles";
import { MenuUserContext } from "../../context/menu-user-context";
import { menuUserRoutes } from "./menu-user";
import { Link } from "../../components/link";
import { Divider } from "../../components/divider";

export function HeaderApp() {
  const menuUserContext = useContext(MenuUserContext);
  return (
    <Styled.Header>
      <Styled.Avatar onClick={menuUserContext.setOpen}></Styled.Avatar>
      <Styled.MenuUser display={menuUserContext.open ? "flex" : "none"} id="menu-user">
        <Link>Olá</Link>
        <Divider />
        {menuUserRoutes.map((menu) => (
          <Link key={menu.id} route={menu.route}>{menu.title}</Link>
        ))}
        <Divider />
        <Link>Sair</Link>
      </Styled.MenuUser>
    </Styled.Header>
  );
}
