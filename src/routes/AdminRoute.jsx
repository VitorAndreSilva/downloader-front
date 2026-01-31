import useAuth from "../auth/useAuth";
import "../pages/Admin/admin.css";

export default function AdminRoute({ children }) {
    const { user } = useAuth();
    console.log(user);
    if (!user?.is_staff) {
        return <p className="admin-denied">Acesso negado.</p>
    }

    return children
}