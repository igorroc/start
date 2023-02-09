import { styled } from "@stitches/react"

export const StyledWeather = styled("div", {
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",

	background: "linear-gradient(var(--background-color), var(--background-color-2))",
})
