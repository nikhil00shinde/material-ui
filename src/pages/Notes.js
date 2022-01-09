import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

export default function Notes() {
	const [notes, setNotes] = useState([]);

	useEffect(() => {
		fetch("http://localhost:8000/notes")
			.then((res) => res.json())
			.then((data) => setNotes(data));
	}, []);

	return (
		<Container maxWidth="xl">
			{/* <Grid container>
				<Grid item xs={12} sm={6} md={3}>
					<Paper>1</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper>2</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper>3</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<Paper>4</Paper>
				</Grid>
			</Grid> */}

			<Grid container>
				{notes.map((note) => {
					return (
						<Grid item key={note.id} xs={12} md={6} lg={4}>
							<Paper>{note.title}</Paper>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

// grid container -> is like wrapper around all the element inside the grid
// grid item --> they are the thing that is going to laid on the grid

// it 12 columns system
//md -> medium size screen and up
// xs -> extra small size
// sm --> small size screen
// lg --> large
