import Header from "../components/shared/Header";
import SideBar from "../components/shared/SideBar";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
