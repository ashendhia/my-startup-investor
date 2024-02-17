import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import AccountDashboard from "./AccountDropdown";

import { Menu } from "lucide-react";
import { Fragment } from "react";
import { useTheme } from "@mui/material";
import DrawerStartup from "./DrawerStartup";

const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const theme = useTheme();

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Fragment>
      <NavigationMenu
        style={{ zIndex: theme.zIndex.drawer + 1 }}
        className="w-full justify-between h-[78px] items-center px-4 fixed z-50 border-b-darkBlue border-b-[1px] bg-white"
      >
        <NavigationMenuList>
          <NavigationMenuItem className="font-bold text-4xl h-16 flex gap-4 items-center">
            <Menu onClick={handleDrawer} />
            <NavigationMenuLink>MyStartUp</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <AccountDashboard />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <DrawerStartup open={open} />
    </Fragment>
  );
};

export default SideBar;
