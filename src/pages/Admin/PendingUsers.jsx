import { useEffect, useState } from "react";
import { approveUser, fetchPendingUsers, rejectUser } from "../../services/admin";

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
        <div>
            <h1>Solicitações pendentes</h1>
            {users.length === 0 && <p>Não há solicitações pendentes. Pense no futuro!</p>}
            <div>
                {users.map(user => (
                <li key={user.id}>
                    <ul>
                        <p>Email: {user.email}</p>
                        <button onClick={() => handleApprove(user.id)}>Aprovar</button>
                        <button onClick={() => handleReject(user.id)}>Rejeitar</button>
                    </ul>
                </li>
                ))}
            </div>
        </div>
    )
}