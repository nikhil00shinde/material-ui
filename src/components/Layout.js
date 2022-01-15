import { makeStyles } from "@mui/styles";
import React from "react";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
	useHistory,
	useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
	return {
		page: {
			background: "#f9f9f9",
			width: "100%",
			padding: theme.spacing(3),
		},
		drawer: {
			width: drawerWidth,
		},
		drawerPaper: {
			width: drawerWidth,
		},
		root: {
			display: "flex",
		},
		active: {
			background: "#f4f4f4!important",
		},
		title: {
			padding: theme.spacing(2),
		},
	};
});

export default function Layout({ children }) {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();

	const menuItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlineOutlined color="secondary" />,
			path: "/create",
		},
	];

	return (
		<div className={classes.root}>
			{/* app bar */}

			{/* side drawer */}
			<Drawer
				className={classes.drawer}
				variant="permanent"
				anchor="left"
				classes={{ paper: classes.drawerPaper }}
			>
				<div>
					<Typography variant="h5" className={classes.title}>
						Ninja Notes
					</Typography>
				</div>

				{/* list / links */}
				<List>
					{menuItems.map((item) => (
						<ListItem
							key={item.text}
							button
							onClick={() => {
								history.push(item.path);
								console.log(location.pathname, item.path);
							}}
							className={
								location.pathname === item.path ? classes.active : null
							}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>

				{/* <List>
					<ListItem>
						<ListItemText primary="Hello" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Hello" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Hello" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Hello" />
					</ListItem>
					<ListItem>
						<ListItemText primary="Hello" />
					</ListItem>
				</List> */}
			</Drawer>

			<div className={classes.page}>{children}</div>
		</div>
	);
}

// hum makeStyle aur jyada tareeko se use kar sakte hain like padding
// padding: theme.spacing(3) , which means 3 times the 8px


// 2 thing we csn do with makeStyles 
// 1. we could use a function to return a object, that function could take in theme, to use theme value.
// 2. If we want to pass an extra argument  (useStyles(note)) to use in different properties. And that could just be a function , which takes in an argument, we can use it and also return some kind value