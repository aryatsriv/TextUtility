
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/Inbox";
import drawerMenuData from "./DrawerMenu.json";
import { useEffect, useState } from "react";

const SideDrawerContent = () => {
	const [menuItems, setMenuItems] = useState([])
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		try {
			setMenuItems(drawerMenuData);
		} catch (error) {
			console.error("Error loading menu items", error)
		}
		finally {
			setLoading(false)
		}
	}, []);
	return (
		<>
			{menuItems.map((item, index) => (
				<ListItem key={item.id} disablePadding>
					<ListItemButton>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={item.menuText} />
					</ListItemButton>
				</ListItem>
			))}
			<Divider />

		</>
	)
}

export default SideDrawerContent;
