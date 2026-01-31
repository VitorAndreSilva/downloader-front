import './header.css'
import { useNavigate, Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function Header() {
    const navigate = useNavigate();
    const user = useAuth();

    async function logout() {
        localStorage.removeItem('token');
        navigate("/welcome");
    }

    return (
        <header className="home-header">
            <h2>Downloader</h2>
            <nav>
                {/*<Link to="/downloads">Meus downloads</Link>*/}
                {(() => {
                    if (!user?.is_staff) return null
                    return <Link to="/admin">Admin</Link>
                })}
                <button className="logout-btn" onClick={logout}>Logout</button>
            </nav>
        </header>
    )
}