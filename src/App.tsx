import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import StartUps from "./pages/StartUps";
import Map from "./pages/Map";
import Funded from "./pages/Funded";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import RoadMapStartUp from "./pages/RoadMapStartUp";
import SharedLayoutStartup from "./pages/SharedLayoutStartup";
import LegalHelp from "./pages/LegalHelp";
import Investments from "./pages/Investments";
import Advisors from "./pages/Advisors";
import ProfileStartup from "./pages/ProfileStartup";
import SettingsStartup from "./pages/SettingsStartup";
import RoadMapFirst from "./components/RoadMapStartUp/RoadMapFirst";
import RoadMapSecond from "./components/RoadMapStartUp/RoadMapSecond";
import RoadMapThird from "./components/RoadMapStartUp/RoadMapThird";
import RoadMapForth from "./components/RoadMapStartUp/RoadMapForth";
import RoadMapFifth from "./components/RoadMapStartUp/RoadMapFifth";
import { PageProvider } from "./context/PageContext";
import Investors from "./pages/Investors";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageProvider>
          <Routes>
            <Route path="/dashboard" element={<SharedLayout />}>
              <Route index element={<Navigate to="/dashboard/home" />} />
              <Route path="/dashboard/home" element={<Home />} />
              <Route path="startups" element={<StartUps />} />
              <Route path="map" element={<Map />} />
              <Route path="tracking" element={<Funded />} />
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="/startup" element={<SharedLayoutStartup />}>
              <Route path="roadmap" element={<RoadMapStartUp />} />
              <Route path="roadmap/1" element={<RoadMapFirst />} />
              <Route path="roadmap/2" element={<RoadMapSecond />} />
              <Route path="roadmap/3" element={<RoadMapThird />} />
              <Route path="roadmap/4" element={<RoadMapForth />} />
              <Route path="roadmap/5" element={<RoadMapFifth />} />

              <Route path="legalhelp" element={<LegalHelp />} />
              <Route path="investments" element={<Investments />} />
              <Route path="investments/investors" element={<Investors />} />

              <Route path="advisors" element={<Advisors />} />
              <Route path="profile" element={<ProfileStartup />} />
              <Route path="settings" element={<SettingsStartup />} />
            </Route>
          </Routes>
        </PageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
