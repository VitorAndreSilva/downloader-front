import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiPublic from "../../../services/apiPublic.js";
import '../auth.css'

export default function Signup() {
    const inputUser = useRef();
    const inputEmail = useRef();
    const inputPassword = useRef();

    const navigate = useNavigate();

    async function createUser() {
        try {
            const { data } = await apiPublic.post('/auth/signup/', {
                username: inputUser.current.value,
                email: inputEmail.current.value,
                password: inputPassword.current.value
            });
            localStorage.setItem('token', data.access);
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        } catch (error) {
            console.error("Erro ao criar usuário: ", error);
            alert("Erro ao cadastrar usuário");
        }
    }

    return (
        <section className="auth">
            <form className="auth-card">
                <h1>Sign up</h1>
                <input type="text" name="username" placeholder="Nome de usuário" ref={inputUser} />
                <input type="email" name="email" placeholder="Email" ref={inputEmail} />
                <input type="password" name="password" placeholder="Senha" ref={inputPassword} />
                <button type="button" onClick={createUser}>LOGIN</button>
                <p>Já tem uma conta? <Link to="/login">Clique aqui para entrar</Link>.</p>
            </form>
        </section>
    )
}