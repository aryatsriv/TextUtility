import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import { SwipeableDrawer,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider} from "@mui/material";

const drawerWidth = 240;

const SideDrawer = ({ open, handleSetOpen }) => {
  const theme = useThem();
  return (
    <SwipeableDrawer
      anchor="left"
      open={open}
      onClose={() => handleSetOpen(false)}
      onOpen={() => handleSetOpen(true)}
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100%',
          transition: 'margin 0.3s ease-out',
          marginLeft: open ? 0 : `-${drawerWidth}px`,
        },
      }}
    >
      <Divider />
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </SwipeableDrawer>
  );
};

export default SideDrawer;