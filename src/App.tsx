// App.js

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Map from "./pages/Map";
import Funded from "./pages/Funded";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import FindStartUps from "./pages/FindStartUps";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
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
import Investors from "./pages/Investors";
import { PageProvider } from "./context/PageContext";

function App() {
  return (
    <BrowserRouter>
      <PageProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/home" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <SharedLayout />
              </ProtectedRoute>
            }
          >
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
                  <Map position={{ lat: 36.72, log: 3.05 }} />
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
          <Route
            path="/startup"
            element={
              <ProtectedRoute>
                <SharedLayoutStartup />
              </ProtectedRoute>
            }
          >
            <Route
              path="/startup/roadmap"
              element={
                <ProtectedRoute>
                  <RoadMapStartUp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/roadmap/1"
              element={
                <ProtectedRoute>
                  <RoadMapFirst />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/roadmap/2"
              element={
                <ProtectedRoute>
                  <RoadMapSecond />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/roadmap/3"
              element={
                <ProtectedRoute>
                  <RoadMapThird />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/roadmap/4"
              element={
                <ProtectedRoute>
                  <RoadMapForth />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/roadmap/5"
              element={
                <ProtectedRoute>
                  <RoadMapFifth />
                </ProtectedRoute>
              }
            />

            <Route
              path="/startup/legalhelp"
              element={
                <ProtectedRoute>
                  <LegalHelp />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/investments"
              element={
                <ProtectedRoute>
                  <Investments />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/investors"
              element={
                <ProtectedRoute>
                  <Investors />
                </ProtectedRoute>
              }
            />

            <Route
              path="/startup/advisors"
              element={
                <ProtectedRoute>
                  <Advisors />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/profile"
              element={
                <ProtectedRoute>
                  <ProfileStartup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/startup/settings"
              element={
                <ProtectedRoute>
                  <SettingsStartup />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </PageProvider>
    </BrowserRouter>
  );
}

{
  /* <Route
  path="/startup"
  element={
    <ProtectedRoute>
      <SharedLayoutStartup />
    </ProtectedRoute>
  }
>
  <Route
    path="/startup/roadmap"
    element={
      <ProtectedRoute>
        <RoadMapStartUp />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/roadmap/1"
    element={
      <ProtectedRoute>
        <RoadMapFirst />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/roadmap/2"
    element={
      <ProtectedRoute>
        <RoadMapSecond />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/roadmap/3"
    element={
      <ProtectedRoute>
        <RoadMapThird />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/roadmap/4"
    element={
      <ProtectedRoute>
        <RoadMapForth />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/roadmap/5"
    element={
      <ProtectedRoute>
        <RoadMapFifth />
      </ProtectedRoute>
    }
  />

  <Route
    path="/startup/legalhelp"
    element={
      <ProtectedRoute>
        <LegalHelp />
      </ProtectedRoute>
    }
  />
  <Route
    path="/startup/investments"
    element={
      <ProtectedRoute>
        <Investments />
      </ProtectedRoute>
    }
  >
    <Route
      path="/startup/investors"
      element={
        <ProtectedRoute>
          <Investors />
        </ProtectedRoute>
      }
    />

    <Route
      path="/startup/advisors"
      element={
        <ProtectedRoute>
          <Advisors />
        </ProtectedRoute>
      }
    />
    <Route
      path="/startup/profile"
      element={
        <ProtectedRoute>
          <ProfileStartup />
        </ProtectedRoute>
      }
    />
    <Route
      path="/startup/settings"
      element={
        <ProtectedRoute>
          <SettingsStartup />
        </ProtectedRoute>
      }
    />
  </Route>
</Route>; */
}

export default App;
