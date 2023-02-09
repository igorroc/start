import React from "react"
import CloseModalButton from "../CloseModalButton"
import { StyledInfo } from "./style"

interface InfoProps {
	setShowInfo: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Info(props: InfoProps) {
	return (
		<StyledInfo>
			<CloseModalButton handleClose={props.setShowInfo} />
			<h1>Informações</h1>
			<p>
				Esta aplicação foi desenvolvida por <a href="https://ilrocha.com">Igor Rocha</a>{" "}
				como um projeto pessoal.
			</p>
			<p>
				Para mais informações, acesse o repositório do projeto no{" "}
				<a href="https://github.com/igorroc/start">GitHub</a>.
			</p>
		</StyledInfo>
	)
}
