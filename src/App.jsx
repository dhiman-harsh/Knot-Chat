import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContextProvider.jsx'

const App = () => {
    const { currentUser } = useContext(AuthContext)
    const ProtectedRoute = () => {
        if (currentUser) {
            return <Home />
        } else {
            return <Navigate to="/login" />
        }
    }
    return (
        <Routes>
            <Route path="/" element={<ProtectedRoute />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    )
}

export default App