// App.js

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Map from './pages/Map';
import Funded from './pages/Funded';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Settings from './pages/Settings';
import FindStartUps from './pages/FindStartUps';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={ <ProtectedRoute><SharedLayout /></ProtectedRoute>}>
        <Route
          path="/dashboard/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/startups"
          element={
            <ProtectedRoute>
              <FindStartUps />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/map"
          element={
            <ProtectedRoute>
              <Map />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/tracking"
          element={
            <ProtectedRoute>
              <Funded />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
