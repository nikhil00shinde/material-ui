import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
	palette: {
		primary: {
			main: "#fefefe",
		},
		// now we will use color instead of object(purple)
		secondary: purple,
	},
	typography: {
		fontFamily: "Quicksand",
		fontWeightLight: "400",
		fontWeightRegular: "500",
		fontWeightMedium: "600",
		fontWeightBold: "700",
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Switch>
					<Route exact path="/">
						<Notes />
					</Route>
					<Route path="/create">
						<Create />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}

export default App;

// In Material UI we can overide the theme like change the primary color to something new,
// In MUI , default theme is given by using createMuiTheme,ThemeProvider
// we can color object instead of typing color hex code in object
// we can also change font , grap import url
