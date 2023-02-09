import { ThemeProvider } from "@mui/material"
import Home from "./pages/Home"
import { customTheme } from "./theme"


function App() {
	return (
		<ThemeProvider theme={customTheme}>
			<Home />
		</ThemeProvider>
	)
}

export default App
