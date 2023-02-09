import { Icon } from "@iconify/react"
import React from "react"
import { StyledModalClose } from "./style"

interface ModalCloseProps {
	handleClose: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CloseModalButton(props: ModalCloseProps) {
	function handleClose() {
		props.handleClose(false)
	}

	return (
		<StyledModalClose onClick={handleClose}>
			<button>
				<Icon icon="carbon:close" width={24} />
			</button>
		</StyledModalClose>
	)
}
