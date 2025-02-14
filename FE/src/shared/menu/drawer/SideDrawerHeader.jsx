import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { IconButton } from '@mui/material';
import { DrawerHeader } from "../AppBarStyling";
import { useTheme } from '@mui/material';

const SideDrawerHeader = ({ handleDrawerClose }) => {
  const theme = useTheme();

  return (
    <DrawerHeader>
      <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </DrawerHeader>
  )
}


export default SideDrawerHeader;
