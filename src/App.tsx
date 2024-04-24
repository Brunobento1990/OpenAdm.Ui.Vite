import { RoutesApp } from "./routes/routes-app";
import light from "./styles/theme/light";
import Global from "./styles/global";
import { ThemeProvider } from "styled-components";
import { useModal } from "./components/modal";
import { useToast } from "./components/toast";

export function App() {
  const Modal = useModal();
  const Toast = useToast();
  return (
    <ThemeProvider theme={light}>
      <Toast.component />
      <Modal.component />
      <Global />
      <RoutesApp />
    </ThemeProvider>
  );
}
