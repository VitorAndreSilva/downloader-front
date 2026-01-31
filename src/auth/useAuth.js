import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Erro ao usar o AuthContext");
    return context;
}