import NavBar from "@/components/shared/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col w-full">
      <NavBar open={open} setOpen={setOpen} />
      <div
        className={`w-full h-[100vh] overflow-hidden ${
          open ? "sideBarActive" : "sideBar"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayout;
