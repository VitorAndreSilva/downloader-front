import { Navigate } from "react-router-dom";

export default function IsAuthenticated() {
    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to="/home" replace />
    } else {
        return <Navigate to="/welcome" replace />
    }
}