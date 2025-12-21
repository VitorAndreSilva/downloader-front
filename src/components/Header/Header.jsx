import { Link } from "react-router-dom"
import './header.css'

export default function Header() {
    return (
        <header className="home-header">
            <h1>Downloader</h1>
            <nav>
                {/*<Link to="/downloads">Meus downloads</Link>*/}
                <Link to="">Logout</Link>
            </nav>
        </header>
    )
}