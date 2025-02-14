import { Box } from "@mui/material";
import TopMenuBar from "./shared/menu/TopMenuBar";
import SideDrawer from "./shared/menu/drawer/SideDrawer";
import { useState } from "react";
import { Outlet } from "react-router";
import { DrawerHeader, Main } from "./shared/menu/AppBarStyling";

const StartPage = () => {
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <TopMenuBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />
      <Main open={open}>
        <Box sx={{ width: "100vw" }}>
          <DrawerHeader />
          <Outlet className="outlet-main" />
        </Box>
      </Main >
    </Box >

  )
}


export default StartPage;
