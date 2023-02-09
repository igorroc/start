import { Icon } from "@iconify/react"
import { TextField } from "@mui/material"
import React, { useState } from "react"
import CloseModalButton from "../../CloseModalButton"
import { StyledBackgroundConfig } from "./style"

interface BackgroundConfigProps {
	setShowBackgroundConfig: React.Dispatch<React.SetStateAction<boolean>>
}

export default function BackgroundConfig(props: BackgroundConfigProps) {
	const [currentSelector, setCurrentSelector] = useState<"simple" | "gradient" | "image">(
		"gradient"
	)
	const [simpleColor, setSimpleColor] = useState("#232323")
	const [gradientColors, setGradientColors] = useState(["#232323", "#232323"])
	const [image, setImage] = useState<string | undefined>(undefined)

	function handleSelect(e: React.ChangeEvent<HTMLInputElement>) {
		setCurrentSelector(e.target.id as "simple" | "gradient" | "image")
	}

	function handleGradientColors(e: React.ChangeEvent<HTMLInputElement>, index: number) {
		const newColors = [...gradientColors]
		newColors[index] = e.target.value
		setGradientColors(newColors)
	}

	function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
		const url = e.target.value

		if (url) {
			setImage(url)
		}
	}

	return (
		<StyledBackgroundConfig>
			<CloseModalButton handleClose={props.setShowBackgroundConfig} />
			<h1>Plano de fundo</h1>
			<form action="">
				<div className="option">
					<input
						type="checkbox"
						name="simple"
						id="simple"
						onChange={handleSelect}
						checked={currentSelector == "simple"}
					/>
					<label htmlFor="simple">Cor única</label>
				</div>
				{currentSelector === "simple" && (
					<div>
						<input
							type="color"
							value={simpleColor}
							onChange={(e) => setSimpleColor(e.target.value)}
						/>
						<TextField
							value={simpleColor}
							onChange={(e) => setSimpleColor(e.target.value)}
						/>
					</div>
				)}
				<div className="option">
					<input
						type="checkbox"
						name="gradient"
						id="gradient"
						onChange={handleSelect}
						checked={currentSelector == "gradient"}
					/>
					<label htmlFor="gradient">Gradiente</label>
				</div>
				{currentSelector === "gradient" && (
					<>
						<div>
							<p>Cor 1</p>
							<input
								type="color"
								value={gradientColors[0]}
								onChange={(e) => handleGradientColors(e, 0)}
							/>
							<TextField
								value={gradientColors[0]}
								// onChange={(e) => handleGradientColors(e, 0)}
							/>
						</div>
						<div>
							<p>Cor 2</p>
							<input
								type="color"
								value={gradientColors[1]}
								onChange={(e) => handleGradientColors(e, 1)}
							/>
							<TextField
								value={gradientColors[1]}
								// onChange={(e) => handleGradientColors(e, 1)}
							/>
						</div>
					</>
				)}
				<div className="option">
					<input
						type="checkbox"
						name="image"
						id="image"
						onChange={handleSelect}
						checked={currentSelector == "image"}
					/>
					<label htmlFor="image">Imagem</label>
				</div>
				{currentSelector === "image" && (
					<div>
						{image && (
							<div className="imageWrapper">
								<img src={image} />
							</div>
						)}
						<TextField value={image} onChange={handleImage} />
					</div>
				)}
			</form>
		</StyledBackgroundConfig>
	)
}
