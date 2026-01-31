import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import api from "../services/api.js";
import { useNavigate } from "react-router-dom";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    async function loadUser() {
        try {
            const response = await api.get("/auth/account/");
            setUser(response.data);
            setLoading(false);
        } catch {
            setUser(null);
        }
    }

    async function logout() {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/")
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
            loadUser();
        } else {
            setUser(null);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}