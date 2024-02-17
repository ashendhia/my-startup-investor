import SideBar from "@/components/Navigation/SideBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SharedLayoutStartup = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      <SideBar open={open} setOpen={setOpen} />
      <div
        className={`w-full min-h-screen bg-slate-50 ${
          open ? "sideBarActive" : "sideBar"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default SharedLayoutStartup;
