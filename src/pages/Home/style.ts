import { keyframes, styled } from "@stitches/react"

const fadeUp = keyframes({
	from: {
		transform: "translateY(100%)",
		opacity: 0,
	},
	to: {
		transform: "translateY(0%)",
		opacity: 1,
	},
})
const fadeDown = keyframes({
	from: {
		transform: "translateY(-100%)",
		opacity: 0,
	},
	to: {
		transform: "translateY(0%)",
		opacity: 1,
	},
})

export const StyledHome = styled("div", {
	flex: 1,
	display: "flex",
	width: "100%",
	height: "100%",

	"#sideNav": {
		width: 50,
		padding: 10,

		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",

		background: "#ffffff03",
		boxShadow: "0 0 10px 0 #00000020",

		".navFlex": {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",

			".navItem": {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				// gap: 5,

				span: {
					fontSize: "0.7rem",
				},
			},
		},
	},

	main: {
		paddingBlock: 30,
		flex: 1,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",

		"#searchEngines": {
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			width: "100%",
			gap: 10,

			animation: `${fadeDown} 0.5s ease-in-out`,

			h3: {
				fontSize: "1rem",
				fontWeight: "normal",
				opacity: 0,
				cursor: "default",
				transition: "all 0.5s ease-in-out",
			},

			".lista": {
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				gap: 20,
			},

			".engine": {
				display: "none",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",

				border: "none",
				background: "none",
				cursor: "pointer",
				opacity: 0.3,

				transform: "scale(0)",
				transition: "all 0.2s ease-in-out",

				".icon": {
					padding: 10,
					height: 50,
					filter: "brightness(0) invert(1)",
				},

				"&:hover": {
					opacity: 0.5,
				},

				"&[aria-current=true]": {
					display: "flex",
					opacity: 1,
					transform: "scale(1)",
				},
			},

			"&:hover": {
				".engine": {
					transform: "scale(1)",
					display: "flex",
				},
				h3: {
					opacity: 0.6,
				},
			},
		},

		"#contentWrapper": {
			flex: 1,
			width: "100%",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",


			"#search": {
				flex: 1,
				display: "flex",
				width: "100%",
				height: "50%",
				color: "white",

				form: {
					flex: 1,
					display: "flex",
					width: "100%",
					"#searchInput": {
						flex: 1,
						display: "flex",
						width: "100%",
						background: "none",
						border: "none",
						outline: "none",
						textAlign: "center",
						fontSize: "6rem",
					},
				},
			},

			"#shortcuts": {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "90%",
				gap: 10,
				animation: `${fadeUp} 0.5s ease-in-out`,

				h3: {
					fontSize: "1rem",
					fontWeight: "normal",
					opacity: 0,
					cursor: "default",
					transition: "all 0.5s ease-in-out",
				},

				"&:hover": {
					h3: {
						opacity: 0.6,
					},
				},

				".lista": {
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: 40,
				},

				".shortcut": {
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: 5,
					textDecoration: "none",
					height: "max-content",
					transition: "all 0.2s ease-in-out",
					opacity: 0.3,

					".image": {
						width: 30,
						height: 30,

						img: {
							width: "100%",
							height: "100%",
							objectFit: "contain",

							"&.turnWhite": {
								filter: "brightness(0) invert(1)",
							},
						},
					},

					".name": {
						fontSize: "0.8rem",
						padding: "5px 15px",
						color: "white",
						background: "#fff4",
						borderRadius: 20,
					},

					"&:hover": {
						opacity: 0.5,
					},
				},
			},
		},
	},

	"@media (max-width: 600px)": {
		flexDirection: "column",

		"#sideNav": {
			width: "100%",
			height: 50,
			flexDirection: "row",

			".navFlex": {
				flexDirection: "row",
				justifyContent: "space-between",
				".navItem": {
					flexDirection: "row",
				},
			},
		},
	},
})
