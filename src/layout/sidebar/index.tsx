import { ItensMenu } from "./itens-menu";
import { OpenMenu } from "./open-menu";
import { Aside } from "./styles";

export function Sidebar() {
  return (
    <Aside>
      <OpenMenu />
      <ItensMenu />
    </Aside>
  );
}
