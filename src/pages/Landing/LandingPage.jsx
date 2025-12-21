import { Link } from "react-router-dom";
import '../Landing/landing.css'

export default function Landing() {
    return (
        <main className="landing">
            <section className="landing-card">
                <h1>Downloader</h1>
                <p>Baixe arquivos de forma simples, rápida e organizada.</p>

                <div className="actions">
                <Link className="btn primary" to="/signup">Criar conta</Link>
                <Link className="btn outline" to="/login">Entrar</Link>
                </div>
            </section>
        </main>
    )
}