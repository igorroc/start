import { Icon } from "@iconify/react"
import React from "react"
import CloseModalButton from "../../CloseModalButton"
import { StyledSettings } from "./style"

interface SettingsProps {
	setShowSettings: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Settings(props: SettingsProps) {
	return (
		<StyledSettings>
			<CloseModalButton handleClose={props.setShowSettings} />
			<h1>Configurações</h1>
			<p>Em desenvolvimento</p>
		</StyledSettings>
	)
}
