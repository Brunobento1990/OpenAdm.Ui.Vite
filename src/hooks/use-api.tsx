import { useLoader } from "@/components/loader";
import { config } from "@/config";
import axios from "axios";
import { useNavigationApp } from "./use-navigation-app";
import { useToast } from "@/components/toast";

const baseURL = import.meta.env.VITE_URL_API;
const jwtLocalHost = localStorage.getItem(config.keyJwt);
const jwt = jwtLocalHost ?? '';

const api = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${jwt}`
    }
})

interface IOptionsApi {
    notLoading?: boolean;
}

export function useApi() {
    const loader = useLoader();
    const nav = useNavigationApp();
    const toast = useToast({ type: 'error' });

    function handleError(error: any) {
        if(!error?.response){
            nav.navigate("/login");
            toast.show("Sua sessão expirou, efetue o login novamente!");
            return;
        }
        toast.show("Ocorreu um erro interno, tente novamente mais tarde!");
    }

    async function get<T>(url: string, opt?: IOptionsApi): Promise<T> {
        try {
            if(opt && !opt?.notLoading){
                loader?.show();
            }
            return (await api.get(url)).data as T;
        } catch (error) {
            handleError(error);
            throw error;
        } finally {
            if(opt && !opt?.notLoading){
                loader?.close();
            }
        }
    }

    async function post<T>(url: string, body: Partial<T>, opt?: IOptionsApi): Promise<T> {
        try {
            if(opt && !opt?.notLoading){
                loader?.show();
            }
            return (await api.post(url, body)).data as T;
        } catch (error) {
            handleError(error);
            throw error;
        } finally {
            if(opt && !opt?.notLoading){
                loader?.close();
            }
        }
    }

    return {
        get,
        post
    }
}