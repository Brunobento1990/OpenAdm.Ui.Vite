import { ReactNode, useContext, useState } from "react";
import * as Styles from "./styles";
import { INavigation, navigations } from "@/navigation";
import { Icon } from "@/components/icons";
import { useNavigationApp } from "@/hooks/use-navigation-app";
import { MenuContext } from "@/context/menu-context";

export function ItensMenu() {
  const navigateApp = useNavigationApp();
  const { open } = useContext(MenuContext);
  const [active, setActive] = useState<number[]>([]);

  function handleActiveItens(id: number) {
    setActive([...active, id]);
  }

  function removeActiveItens(id: number) {
    setActive(active.filter((x) => x !== id));
  }

  function activeMenu(route?: string): string {
    if (!route) return "";
    if (navigateApp.pathname.includes(route)) return "true";
    return "";
  }

  function mapChildren(
    id: number,
    itens?: INavigation | INavigation[]
  ): ReactNode {
    if (Array.isArray(itens)) {
      return (
        <Styles.Ul>
          {active.includes(id) &&
            itens.map((children) => (
              <Styles.Box key={children.id}>
                <Styles.Li
                  width="85%"
                  active={activeMenu(children.route)}
                  onClick={() => navigateApp.navigate(children.route)}
                >
                  <Icon icon={children.icon} />
                  {open && <Styles.Link>{children.title}</Styles.Link>}
                  {children.children && open && (
                    <Icon
                      icon={
                        active.includes(children.id)
                          ? "oui:arrow-down"
                          : "oui:arrow-up"
                      }
                      onClck={() =>
                        active.includes(children.id)
                          ? removeActiveItens(children.id)
                          : handleActiveItens(children.id)
                      }
                    />
                  )}
                </Styles.Li>
                {children.children &&
                  mapChildren(children.id, children.children)}
              </Styles.Box>
            ))}
        </Styles.Ul>
      );
    }

    if (itens) {
      return (
        <Styles.Ul>
          <Styles.Box key={itens.id}>
            <Styles.Li
              width="85%"
              onClick={() => navigateApp.navigate(itens.route)}
              active={activeMenu(itens.route)}
            >
              <Icon icon={itens.icon} />
              {open && <Styles.Link>{itens.title}</Styles.Link>}
              {itens.children && open && (
                <Icon
                  icon={
                    active.includes(itens.id)
                      ? "oui:arrow-down"
                      : "oui:arrow-up"
                  }
                  onClck={() =>
                    active.includes(itens.id)
                      ? removeActiveItens(itens.id)
                      : handleActiveItens(itens.id)
                  }
                />
              )}
            </Styles.Li>
          </Styles.Box>
        </Styles.Ul>
      );
    }

    return <></>;
  }

  return (
    <Styles.Ul>
      {navigations.map((item) => (
        <Styles.Box key={item.id}>
          <Styles.Li
            onClick={() => navigateApp.navigate(item.route)}
            active={activeMenu(item.route)}
          >
            <Icon icon={item.icon} />
            {open && <Styles.Link>{item.title}</Styles.Link>}
            {item.children && open && (
              <Icon
                icon={
                  active.includes(item.id) ? "oui:arrow-down" : "oui:arrow-up"
                }
                onClck={() =>
                  active.includes(item.id)
                    ? removeActiveItens(item.id)
                    : handleActiveItens(item.id)
                }
              />
            )}
          </Styles.Li>
          {item.children && mapChildren(item.id, item.children)}
        </Styles.Box>
      ))}
    </Styles.Ul>
  );
}
