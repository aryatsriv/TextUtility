
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import drawerMenuData from "./DrawerMenu.json";
import { useEffect, useState } from "react";
import {
	useNavigate
} from "react-router";
const SideDrawerContent = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

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
		<List>
			{menuItems.map((item) => (
				<span key={item.id} >
					<ListItem disablePadding onClick={() => { navigate(item.url) }}>
						<ListItemButton>
							<ListItemText primary={"•  " + item.menuText} />
						</ListItemButton>
					</ListItem>
					{item.children && (
						<List component="div" disablePadding>
							{item.children.map((child) => (
								<ListItem key={child.id} sx={{ pl: 2 }} disablePadding onClick={() => { navigate(item.url + "/" + child.url) }}>
									<ListItemButton>
										<ListItemText primary={"• " + child.menuText} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					)}
					<Divider />
				</span>
			))}
		</List>)
}

export default SideDrawerContent;
