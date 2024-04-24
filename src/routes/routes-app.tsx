import { Layout } from "@/layout/main";
import { INavigation, navigations } from "@/navigation";
import { Login } from "@/pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export function RoutesApp() {
  function mapperRoute(route: INavigation) {
    return (
      <Route
        key={route.id}
        path={route.route}
        element={<Layout>{route.component}</Layout>}
      />
    );
  }

  function mapperRoutes() {
    return navigations.map((route) => {
      if (Array.isArray(route.children)) {
        return route.children.map((children) => mapperRoute(children));
      }
      return mapperRoute(route);
    });
  }

  return (
    <Router>
      <Routes>
        {mapperRoutes()}
        <Route
          path="/"
          element={
            <Layout>
              <></>
            </Layout>
          }
        />
        <Route 
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
}
