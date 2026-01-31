import { useEffect, useState } from "react";
import { approveUser, fetchPendingUsers, rejectUser } from "../../services/admin";
import "../Admin/admin.css"

export default function PendingUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    
    async function loadUsers() {
        setLoading(true);
        try {
            const data = await fetchPendingUsers();
            setUsers(data);
        } catch (e) {
            console.error("Erro ao buscar usuários: ", e);
            setUsers([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadUsers();
    }, []);

    async function handleApprove(id) {
        await approveUser(id);
        loadUsers();
    }

    async function handleReject(id) {
        await rejectUser(id);
        loadUsers();
    }

    if (loading) return <p>Carregando...</p>
    console.log(users);

    return (
        <div className="admin-container">
            <h1>Solicitações pendentes</h1>
            {users.length === 0 && <p className="admin-empty">Não há solicitações pendentes. Pense no futuro!</p>}
            <div className="admin-list">
                {users.map(user => (
                <li key={user.id} className="admin-card">
                    <ul>
                        <p>Email: {user.email}</p>
                        <div className="admin-actions">
                            <button onClick={() => handleApprove(user.id)} className="btn-approve">Aprovar</button>
                            <button onClick={() => handleReject(user.id)} className="btn-reject">Rejeitar</button>
                        </div>
                    </ul>
                </li>
                ))}
            </div>
        </div>
    )
}