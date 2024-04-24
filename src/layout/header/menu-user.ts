export const menuUserRoutes : IMenuUser[] = [
  {
    id: 1,
    title: "Minha conta",
    route: '/minha-conta'
  }
];

interface IMenuUser {
  id: number;
  title: string;
  route?: string;
}
