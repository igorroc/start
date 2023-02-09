import { styled } from "@stitches/react"

export const StyledBackgroundConfig = styled("div", {
	padding: "2em",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	gap: "1em",

	background: "linear-gradient(var(--background-color), var(--background-color-2))",

	form: {
		display: "flex",
		flexDirection: "column",
		gap: "1em",

		".imageWrapper": {
			width: 180,
			height: 90,
			objectFit: "cover",

			"& > img": {
				width: "100%",
				height: "100%",
				objectFit: "cover",
			},
		},
	},
})
