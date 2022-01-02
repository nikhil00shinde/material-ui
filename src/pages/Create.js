import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles({});

export default function Create() {
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

			<Button
				onClick={() => console.log("you Clicked me")}
				type="submit"
				color="secondary"
				variant="contained"
				startIcon={<SendIcon />}
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>
		</Container>
	);
}
