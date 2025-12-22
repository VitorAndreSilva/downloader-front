import './header.css'
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    async function logout() {
        localStorage.removeItem('token');
        navigate("/welcome");
    }

    return (
        <header className="home-header">
            <h2>Downloader</h2>
            <nav>
                {/*<Link to="/downloads">Meus downloads</Link>*/}
                <button className="logout-btn" onClick={logout}>Logout</button>
            </nav>
        </header>
    )
}