import { useLocation, useNavigate } from "react-router-dom";

export function useNavigationApp() {
  const local = useLocation();
  const navigation = useNavigate();

  function navigate(route?: string) {
    if (route) {
      navigation(route);
    }
  }

  return {
    navigate,
    pathname: local.pathname,
  };
}
