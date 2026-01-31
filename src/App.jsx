import { Route, Routes } from "react-router-dom"

//import Home from './pages/Home/Home.jsx'
import Landing from "./pages/Landing/LandingPage.jsx"
import Download from './pages/Download/Download.jsx'
import Signup from "./pages/Auth/Signup/Signup.jsx"
import Login from "./pages/Auth/Login/Login.jsx"
import PendingUsers from "./pages/Admin/PendingUsers.jsx"
import PrivateRoute from "./routes/PrivateRoute.jsx"
import PublicRoute from "./routes/PublicRoute.jsx"
import AdminRoute from "./routes/AdminRoute.jsx"
import MainLayout from "./layouts/MainLayout.jsx"
import IsAuthenticated from "./utils/IsAuthenticated.jsx"
import AuthProvider from "./auth/AuthProvider.jsx"

export default function App() {
    return (
        <AuthProvider>
            <Routes>
                {/*Rotas públicas*/}
                <Route path="/" element={<IsAuthenticated />} />
                <Route path="/welcome" element={
                    <PublicRoute>
                        <Landing />
                    </PublicRoute>
                } />
                <Route path="/signup" element={
                    <PublicRoute>
                        <Signup />
                    </PublicRoute>
                } />
                <Route path="/login" element={
                    <PublicRoute>
                        <Login />
                    </PublicRoute>
                } />
                {/*Rotas privadas*/}
                <Route element={<MainLayout />}>
                    <Route path="/home" element={
                        <PrivateRoute>
                            <Download />
                        </PrivateRoute>
                    } />
                    {/*Página de Admin*/}
                    <Route path="/admin" element={
                        <AdminRoute>
                            <PendingUsers />
                        </AdminRoute>
                    }/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}