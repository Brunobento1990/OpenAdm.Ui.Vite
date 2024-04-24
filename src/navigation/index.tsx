import { Banner } from "@/pages/ecommerce/banner";
import { LojasParceiras } from "@/pages/ecommerce/lojas-parceiras";
import { Pedido } from "@/pages/ecommerce/pedido";
import { Categoria } from "@/pages/estoque/categoria";
import { MovimentoProduto } from "@/pages/estoque/movimento-produto";
import { Peso } from "@/pages/estoque/peso";
import { PosicaoDeEstoque } from "@/pages/estoque/posicao-estoque";
import { Produto } from "@/pages/estoque/produto";
import { Tamanho } from "@/pages/estoque/tamanho";
import { Home } from "@/pages/home";
import { ReactNode } from "react";

export interface INavigation {
  id: number;
  title: string;
  icon?: string;
  route?: string;
  children?: INavigation | INavigation[];
  component?: ReactNode;
}

export const navigations: INavigation[] = [
  {
    id: 1,
    title: "Home",
    icon: "carbon:home",
    route: "/home",
    component: <Home />,
  },
  {
    id: 2,
    title: "E-commerce",
    icon: "icons8:shopping-cart",
    children: [
      {
        id: 3,
        title: "Pedidos",
        icon: "material-symbols-light:order-approve-outline",
        route: "/ecommerce/pedido",
        component: <Pedido />,
      },
      {
        id: 4,
        title: "Banners",
        icon: "material-symbols-light:planner-banner-ad-pt-outline",
        route: "/ecommerce/banner",
        component: <Banner />,
      },
      {
        id: 5,
        title: "Lojas parceiras",
        icon: "mdi:store-check-outline",
        route: "/ecommerce/lojas-parceiras",
        component: <LojasParceiras />,
      },
    ],
  },
  {
    id: 6,
    title: "Estoque",
    icon: "healthicons:stock-out-outline",
    children: [
      {
        id: 7,
        title: "Categoria",
        icon: "mdi:category-outline",
        route: "/estoque/categoria",
        component: <Categoria />,
      },
      {
        id: 8,
        title: "Produto",
        icon: "fluent-mdl2:product-variant",
        route: "/estoque/produto",
        component: <Produto />,
      },
      {
        id: 9,
        title: "Peso",
        icon: "game-icons:weight",
        route: "/estoque/peso",
        component: <Peso />,
      },
      {
        id: 10,
        title: "Tamanho",
        icon: "bx:font-size",
        route: "/estoque/tamanho",
        component: <Tamanho />,
      },
      {
        id: 11,
        title: "Movimento produto",
        icon: "arcticons:stockswidget",
        route: "/estoque/movimento-produto",
        component: <MovimentoProduto />,
      },
      {
        id: 12,
        title: "Posição de estoque",
        icon: "icon-park-outline:database-position",
        route: "/estoque/posicao-estoque",
        component: <PosicaoDeEstoque />,
      },
    ],
  },
];
