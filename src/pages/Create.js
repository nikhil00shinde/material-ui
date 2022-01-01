import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

//very useFull for adding extra custom css rule
const useStyles = makeStyles({
	btn: {
		fontSize: "60px!important",
		backgroundColor: "violet!important",
		// apply hover
		"&:hover": {
			backgroundColor: "blue!important",
		},
	},
	title: {
		textDecoration: "underline",
		marginBottom: 20,
	},
});

export default function Create() {
	// we invoke that hook given by makeStyles function
	const classes = useStyles();
	return (
		<Container>
			<Typography
				className={classes.title}
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Create a New Note
			</Typography>

			{/* Apply css to button */}

			<Button
				className={classes.btn}
				onClick={() => console.log("you Clicked me")}
				type="submit"
				color="secondary"
				variant="contained"
				startIcon={<SendIcon />}
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>

			{/* icons */}
			{/* <br />
			<AcUnitOutlinedIcon />
			<AcUnitOutlinedIcon color="secondary" fontSize="large" />
			<AcUnitOutlinedIcon color="secondary" fontSize="small" />
			<AcUnitOutlinedIcon color="action" fontSize="small" />
			<AcUnitOutlinedIcon color="error" fontSize="small" />
			<AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
		</Container>
	);
}

// We can use fullystyle button with built in css in mui
// sometimes we want style in our way, so we use function called makeStyles
// using this function we can create css classes and rules using javascript object.
// then this return a react hook, then we use inside our component to access those styles n classes
