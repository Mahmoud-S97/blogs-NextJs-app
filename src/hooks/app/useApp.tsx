import { AppContext } from "@/store/context/AppContext";
import { useContext } from "react";

export const useApp = () => {
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error('AppContext must be rendered within AppContextProvider.');
    }

    return appContext;
}