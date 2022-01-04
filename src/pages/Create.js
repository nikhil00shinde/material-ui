import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControlLabel } from "@mui/material";
// Wrapper for certain section of form (to put form label and radiogroup in same context)
import FormControl from "@mui/material/FormControl";

//  FormLabel apply label to different form section
import FormLabel from "@mui/material/FormLabel";

const useStyles = makeStyles({
	field: {
		marginTop: "20px!important",
		marginBottom: "20px!important",
		display: "block!important",
	},
});

export default function Create() {
	const classes = useStyles();

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);
	const [category, setCategory] = useState("todos");

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
			console.log(title, details, category);
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

				{/* Here user can choose both radio button pr humhe ek choose karna hain */}
				{/* <Radio value="hello" />
				<Radio value="goodbye" /> */}

				{/* ek choose karne ke liye Radiogroup component ka use karenge, unko iske andhar wrap kar denge */}
				{/* <RadioGroup>
					<Radio value="hello"></Radio>
					<Radio value="goodbye"></Radio>
				</RadioGroup> */}

				{/* isey bhi accha ek way hain jisse aap label bhi add kar sakte us radio button par */}
				{/* FormControllLabel ko control property denge jo radio component lenga */}
				{/* humhe value bhi store and by default select bhi karna hain RadioGroup ko value de do taki by default todos select ho jaye*/}
				{/* baki select karne ke liye onChange RadioGroup */}

				<FormControl className={classes.field}>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<FormControlLabel
							value="money"
							control={<Radio color="secondary" />}
							label="Money"
						/>
						<FormControlLabel
							value="todos"
							control={<Radio color="secondary" />}
							label="Todos"
						/>
						<FormControlLabel
							value="reminders"
							control={<Radio color="secondary" />}
							label="Reminders"
						/>
						<FormControlLabel
							value="work"
							control={<Radio color="secondary" />}
							label="Work"
						/>
					</RadioGroup>
				</FormControl>
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

// Radio buttons allow the user to select one option from a set.
// Radio ke pass value attribute jimse hum uski value store karte ahain
