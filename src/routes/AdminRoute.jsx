import useAuth from "../auth/useAuth";

export default function AdminRoute({ children }) {
    const { user } = useAuth();
    console.log(user);
    if (!user?.is_staff) {
        return <p>Pá! Acesso negado.</p>
    }

    return children
}