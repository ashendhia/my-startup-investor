import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import StartUps from "./pages/StartUps";
import Map from "./pages/Map";
import Funded from "./pages/Funded";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route path="/dashboard" element={<SharedLayout />}>
            <Route index element={<Navigate to="/dashboard/home" />} />
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="startups" element={<StartUps />} />
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
