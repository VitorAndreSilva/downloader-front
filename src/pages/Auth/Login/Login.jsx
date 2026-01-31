import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiPublic from "../../../services/apiPublic.js";
import useAuth from "../../../auth/useAuth.js";
import '../auth.css'

export default function Login() {
    const inputUser = useRef();
    const inputPassword = useRef();
    //let token = localStorage.getItem('token');

    const navigate = useNavigate();
    const { loadUser } = useAuth();

    async function registerUser() {
        try {
            const { data } = await apiPublic.post('/auth/token/', {
                username: inputUser.current.value,
                password: inputPassword.current.value
            })
            //let token = data.access;
            localStorage.setItem('token', data.access);
            await loadUser();
            alert("Bem-vindo");
            navigate("/");
        } catch (error) {
            console.error("Erro ao entrar com usuário: ", error);
            alert("Erro ao logar usuário");
        }
    }

    return (
        <section className="auth">
            <form className="auth-card">
                <h1>Login</h1>

                <input placeholder="Usuário" ref={inputUser} />
                <input placeholder="Senha" type="password" ref={inputPassword} />

                <button type="button" onClick={registerUser}>Entrar</button>

                <p>Não tem conta? <Link to="/signup">Criar conta</Link></p>
            </form>
        </section>
    )
}