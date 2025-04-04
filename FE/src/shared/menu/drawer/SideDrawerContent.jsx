
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
							<ListItemText
								primary=<b>{item.menuText}</b>
								sx={{ fontWeight: 'bold' }}
							/>
						</ListItemButton>
					</ListItem>
					{item.children && (
						< List
							component="div"
							disablePadding
							sx={{
								position: 'relative',
								ml: 2,
								pl: 1,
								borderLeft: '2px solid #666666', // Vertical line
							}}
						>
							{item.children.map((child) => (
								<ListItem
									key={child.id}
									disablePadding
									onClick={() => {
										navigate(item.url + "/" + child.url);
									}}
									sx={{
										pl: 2,
										position: 'relative',
									}}
								>
									<ListItemButton>
										<ListItemText primary={child.menuText} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					)}
				</span>
			))}
		</List>
	)
}

export default SideDrawerContent;
