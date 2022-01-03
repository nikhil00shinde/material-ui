import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles({
	field: {
		marginTop: "20px!important",
		marginBottom: "20px!important",
		display: "block",
	},
});

export default function Create() {
	const classes = useStyles();

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		setTitleError(false);
		setDetailsError(false);

		if (title == "") {
			setTitleError(true);
		}

		if (details == "") {
			setDetailsError(true);
		}

		if (title && details) {
			console.log(title, details);
		}
	};

	return (
		<Container maxWidth="xl">
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Create a New Note
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					className={classes.field}
					label="Note Title"
					color="secondary"
					variant="outlined"
					fullWidth
					required
					error={titleError}
				></TextField>
				<TextField
					onChange={(e) => {
						setDetails(e.target.value);
					}}
					className={classes.field}
					label="Details"
					color="secondary"
					variant="outlined"
					multiline
					rows={4}
					fullWidth
					required
					error={detailsError}
				></TextField>

				<Button
					type="submit"
					color="secondary"
					variant="contained"
					endIcon={<KeyboardArrowRightIcon />}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}

// isme hum form tag use karenge kyuki material ui ke pass form component nhi hota and
// form element mei hum prop bejenge "noValidate" -> jo ki browser ko bolta hain, ki mujhe teri koi builtin validation  messages use nhi karna
// autoComplete="off" -> it doesn't autocomplete when you type
// onSubmit pe jo function diya hain voh chala dena

// Text Field
// fullWidth -> take full width
// required -> ye humhe required hain means compulsory to fill by adding astriks sign(*) after label
// agar humhe multiline chahiye toh humhe, multiline prop use karna padhega
// hum multiline ko row bhi provide kar sakte hain -> rows={4}
// agar error ek boolean value agar true hain to error show karna
