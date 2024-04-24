import { useToast } from "@/components/toast";
import { config } from "@/config";
import { useApi } from "@/hooks/use-api";
import { useNavigationApp } from "@/hooks/use-navigation-app";

export function useApiLogin() {
    const { post } = useApi();
    const nav = useNavigationApp();
    const toast = useToast({ type: 'error' });

    async function login(login: any) {
        try {
            const response = await post<any>("login/funcionario", login, { notLoading: true });
            if (response?.token && response?.userData) {
                localStorage.setItem(config.keyJwt, response.token);
                localStorage.setItem(config.user, JSON.stringify(response.userData));
                nav.navigate("/home")
            } else {
                toast.show("E-mail ou senha incorretos!");
            }
        } catch (error) {
            toast.show("E-mail ou senha incorretos!");
        }
    }

    return {
        login
    }
}