import { Drawer, Divider } from "@mui/material";
import { useTheme } from "@emotion/react";
import { DrawerWidth } from "../AppBarStyling"
import SideDrawerHeader from "./SideDrawerHeader";
import SideDrawerContent from "./SideDrawerContent";
const SideDrawer = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: DrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DrawerWidth,
          boxSizing: 'border-box',
          border: 'none'
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <SideDrawerHeader handleDrawerClose={handleDrawerClose} />
      <SideDrawerContent />
    </Drawer>
  );
}
export default SideDrawer;
