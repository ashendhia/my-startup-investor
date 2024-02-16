import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Map from "./pages/Map";
import Funded from "./pages/Funded";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import FindStartUps from "./pages/FindStartUps";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="/dashboard" element={<SharedLayout />}>
            <Route index element={<Navigate to="/dashboard/home" />} />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="startups" element={<FindStartUps />} />
            <Route path="map" element={<Map />} />
            <Route path="tracking" element={<Funded />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
