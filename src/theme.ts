import { ThemeOptions, createTheme } from "@mui/material/styles"

export const themeOptions: ThemeOptions = {
	palette: {
		mode: "dark",
		primary: {
			main: "#00e676",
		},
		secondary: {
			main: "#880e4f",
		},
	},
	typography: {
		fontFamily: '"Open Sans" "Helvetica", "Arial", sans-serif',
	},
}

export const customTheme = createTheme(themeOptions)
