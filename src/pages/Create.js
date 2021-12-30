import React from "react";
import Typography from "@mui/material/Typography"; //import { Typography } from "@mui/material";

export default function Create() {
	return (
		<div>
			<Typography
				variant="h6"
				color="textSecondary"
				component="h2"
				gutterBottom
			>
				Create a New Note
			</Typography>
			{/* <Typography variant="h1" color="primary" align="center">
				Create a New Note
			</Typography>
			<Typography noWrap color="secondary">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
				molestiae magnam voluptate reiciendis fuga totam facere officia, animi
				sint laboriosam dolorum voluptas cupiditate explicabo dolore veritatis
				recusandae rem inventore sunt.
			</Typography> */}
		</div>
	);
}

//We pass props to component as varaint, component

//variant -> applies the theme typography styles.
//component -> The component used for the root node.Either a string to use a HTML element or a component.
// align -> set the text-align on the component
//gutterBottom -> If true, the text will have a bottom margin.
// noWrap -> If true, the text will not wrap, but instead will truncate with a text overflow.
// color -> used for color.(primary,secondary,textSecondary)
