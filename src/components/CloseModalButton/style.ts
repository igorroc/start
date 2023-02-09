import { styled } from "@stitches/react"

export const StyledModalClose = styled("div", {
	position: "absolute",
	top: 10,
	right: 10,

	button: {
		width: 30,
		height: 30,
		borderRadius: 5,
		background: "var(--danger-color-transparent)",
		color: "#fff",
		fontSize: "1.5rem",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		border: "1px solid var(--danger-color)",
		outline: "none",
		cursor: "pointer",
		transition: "all 0.2s ease-in-out",

		"&:hover": {
			background: "var(--danger-color)",
		},
	},
})
