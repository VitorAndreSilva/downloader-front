import { Route, Routes, Navigate } from "react-router-dom"

//import Home from './pages/Home/Home.jsx'
import Landing from "./pages/Landing/LandingPage.jsx"
import Download from './pages/Download/Download.jsx'
import Signup from "./pages/Auth/Signup/Signup.jsx"
import Login from "./pages/Auth/Login/Login.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import IsAuthenticated from "./utils/IsAuthenticated.jsx"

export default function App() {
    return (
        <Routes>
            {/*Rotas públicas*/}
            <Route path="/" element={
                IsAuthenticated() ? (
                    <Navigate to="/home" replace />
                ) : (
                    <Navigate to="/welcome" replace />
                )
            } />
            <Route path="/welcome" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/*Rotas privadas*/}
            {/*Rotas com cabeçalho*/}
            <Route element={<MainLayout />}>
                <Route path="/home" element={
                    <PrivateRoute>
                        <Download />
                    </PrivateRoute>
                } />
            </Route>
        </Routes>
    )
}