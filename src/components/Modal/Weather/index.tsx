import React from "react"
import CloseModalButton from "../../CloseModalButton"
import { StyledWeather } from "./style"

interface WeatherProps {
	setShowWeather: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Weather(props: WeatherProps) {
	return (
		<StyledWeather>
			<CloseModalButton handleClose={props.setShowWeather} />
			<h1>Clima</h1>
			<p>Em desenvolvimento</p>
		</StyledWeather>
	)
}
