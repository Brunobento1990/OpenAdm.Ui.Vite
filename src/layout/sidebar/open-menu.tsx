import { useContext } from "react";
import { Icon } from "../../components/icons";
import { OpenMenuBtn, OpenMenuDiv, Title } from "./styles";
import { MenuContext } from "../../context/menu-context";

export function OpenMenu() {
  const menuContext = useContext(MenuContext);
  return (
    <OpenMenuDiv
      width="100%"
      justifycontent={menuContext.open ? "space-between" : "center"}
    >
      {menuContext.open && <Title>Open Adm</Title>}
      <OpenMenuBtn onClick={menuContext.setOpen}>
        <Icon icon="ic:baseline-menu" />
      </OpenMenuBtn>
    </OpenMenuDiv>
  );
}
