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
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { format } from "date-fns";

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
		appbar: {
			width: `calc(100% - ${drawerWidth}px)!important`,
		},
		toolbar: theme.mixins.toolbar,
		date: {
			flexGrow: 1,
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
			<AppBar className={classes.appbar} elevation={0}>
				<Toolbar>
					<Typography className={classes.date}>
						{/* {Date().toString()} */}
						Today is the {format(new Date(), "do MMMM Y")}
					</Typography>
					<Typography>Mario</Typography>
				</Toolbar>
			</AppBar>

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
			</Drawer>

			<div className={classes.page}>
				<div className={classes.toolbar}></div>
				{children}
			</div>
		</div>
	);
}

// Appbar ke andhar toolbar hain
// using theme we can get toolbar height

// using formatted date we use Package called (data-fns)
