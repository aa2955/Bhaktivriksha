import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import TrackerPage from './pages/TrackerPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><LandingPage /></PrivateRoute>} />
      <Route path="/tracker" element={<PrivateRoute><TrackerPage /></PrivateRoute>} />
      <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />"
    </Routes>
  )
}

export default App
