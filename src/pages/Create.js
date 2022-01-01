import React from "react";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Create() {
	return (
		<Container>
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Create a New Note
			</Typography>

			{/* Apply icon to button */}

			<Button
				onClick={() => console.log("you Clicked me")}
				type="submit"
				color="secondary"
				variant="contained"
				startIcon={<SendIcon />}
				endIcon={<KeyboardArrowRightIcon/>}
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

// install material ui icon library to use icons
// props -> color, fontSize(large,small)
// Apply icon to button using props as startIcon and endIcon