import './header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../auth/useAuth';

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="home-header">
            <Link to="/">
                <h2>Downloader</h2>
            </Link>
            <nav>
                {/*<Link to="/downloads">Meus downloads</Link>*/}
                {user?.is_staff && <Link to="/admin">Admin</Link>}
                <button className="logout-btn" onClick={logout}>Logout</button>
            </nav>
        </header>
    )
}