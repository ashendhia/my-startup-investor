import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

import {
  Building2,
  Home,
  Map,
  Search,
  Settings,
  UserRound,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const drawerWidth = 260;

const openedMixin = () => ({
  width: drawerWidth,
});

const closedMixin = () => ({});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  height: "78px",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(),
    "& .MuiDrawer-paper": openedMixin(),
  }),
  ...(!open && {
    ...closedMixin(),
    "& .MuiDrawer-paper": closedMixin(),
  }),
}));

const DashboardDrawer = ({ open }: { open: boolean }) => {
  return (
    <Drawer
      variant="permanent"
      open={open}
      className="border-r-lightGreen border-[2px]"
    >
      <DrawerHeader />
      <Divider
        sx={{
          backgroundColor: "#FFF",
        }}
      />
      <div className="flex flex-col px-[25px] pt-[36px] gap-3 items-start justify-center">
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/home"
        >
          <Home size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Home</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/startups"
        >
          <Search size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Find Startups</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/map"
        >
          <Map size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Map</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/tracking"
        >
          <Building2 size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Tracking</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/profile"
        >
          <UserRound size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Profile</p>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `h-12 px-2 flex items-center gap-4 rounded-sm w-full ${
              isActive ? "sideBarMenuItemActive" : "sideBarMenuItem"
            }`
          }
          to="/dashboard/settings"
        >
          <Settings size={28} />
          <p className={`${open ? "flex" : "hidden"}`}>Settings</p>
        </NavLink>
      </div>
    </Drawer>
  );
};

export default DashboardDrawer;
