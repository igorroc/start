import { StyledHome } from "./style"
import { Icon } from "@iconify/react"
import { Grow, IconButton, Modal, Paper } from "@mui/material"
import { useEffect, useState } from "react"
import Settings from "../../components/Settings"
import { defaultHomeData, HomeDataType, SearchEngineType } from "../../hooks/useHomeData"
import Info from "../../components/Info"

const searchEngines = [
	{
		name: "Google",
		icon: "logos:google",
		url: "https://google.com/search?q=",
	},
	{
		name: "YouTube",
		icon: "icomoon-free:youtube2",
		url: "https://youtube.com/results?search_query=",
	},
	{
		name: "GitHub",
		icon: "octicon:logo-github-16",
		url: "https://github.com/search?q=",
	},
]

const shortcuts = [
	{
		name: "GitHub",
		image: "https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg",
		url: "https://github.com",
	},
	{
		name: "Instagram",
		image: "https://atorre.pt/wp-content/uploads/2019/10/white-instagram-icon-instagram-logo-instagram-instagram-icon-white-11553385558pigg7yyye3.png",
		url: "https://instagram.com",
	},
	{
		name: "YouTube",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/YouTube_light_icon_%282017%29.svg/2560px-YouTube_light_icon_%282017%29.svg.png",
		url: "https://youtube.com",
	},
	{
		name: "WhatsApp",
		image: "https://cdn-icons-png.flaticon.com/512/152/152740.png",
		url: "https://web.whatsapp.com",
		turnToWhite: true,
	},
	{
		name: "Discord",
		image: "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png",
		url: "https://discord.com/app",
	},
]

export default function Home() {
	const [currentSearchEngine, setCurrentSearchEngine] = useState({} as SearchEngineType)
	const [inputValue, setInputValue] = useState("")

	const [showSettings, setShowSettings] = useState(false)
	const [showInfo, setShowInfo] = useState(false)
	const [showWeather, setShowWeather] = useState(false)
	const [showBackgroundConfig, setShowBackgroundConfig] = useState(false)

	const [homeData, setHomeData] = useState({} as HomeDataType)

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const query = inputValue
		if (!currentSearchEngine.url) {
			return alert("Erro: Nenhum motor de busca selecionado")
		}
		window.location.href = currentSearchEngine.url + query
	}

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	function handleClose() {
		setShowSettings(false)
		setShowInfo(false)
	}

	useEffect(() => {
		const searchInput = document.getElementById("searchInput")
		if (searchInput) {
			searchInput.focus()
		}

		const homeData = localStorage.getItem("homeData")
		if (homeData) {
			const homeDataParsed = JSON.parse(homeData)
			setHomeData(homeDataParsed)
			setCurrentSearchEngine(homeDataParsed.searchEngines[0])
		} else {
			const defaultData = defaultHomeData()
			localStorage.setItem("homeData", JSON.stringify(defaultData))
			setHomeData(defaultData)
		}
	}, [])

	return (
		<StyledHome>
			<Modal open={showSettings} onClose={handleClose} className="ModalWrapper">
				<Grow in={showSettings}>
					<Paper elevation={20} className="Modal">
						<Settings setShowSettings={setShowSettings} />
					</Paper>
				</Grow>
			</Modal>
			<Modal open={showInfo} onClose={handleClose} className="ModalWrapper">
				<Grow in={showInfo}>
					<Paper elevation={20} className="Modal">
						<Info setShowInfo={setShowInfo} />
					</Paper>
				</Grow>
			</Modal>
			<div id="sideNav">
				<div className="navFlex">
					<IconButton onClick={() => setShowSettings(!showSettings)}>
						<Icon icon="material-symbols:settings" width={24} />
					</IconButton>
					<IconButton onClick={() => setShowInfo(!showInfo)}>
						<Icon icon="material-symbols:info-rounded" width={24} />
					</IconButton>
				</div>
				<div className="navFlex">
					<div className="navItem">
						<IconButton onClick={() => setShowWeather(!showWeather)}>
							<Icon icon="material-symbols:weather-snowy" width={24} />
						</IconButton>
						<span>32°C</span>
					</div>
					<IconButton onClick={() => setShowSettings(!showSettings)}>
						<Icon icon="material-symbols:landscape-rounded" width={24} />
					</IconButton>
				</div>
			</div>
			<main>
				<div id="searchEngines">
					{homeData && homeData.searchEngines && homeData.searchEngines.length > 0 && (
						<div className="lista">
							{homeData.searchEngines.map((engine) => (
								<button
									key={engine.name}
									className="engine"
									aria-current={
										engine.name == currentSearchEngine.name ? "true" : "false"
									}
									onClick={() => setCurrentSearchEngine(engine)}
								>
									<Icon icon={engine.icon} height={50} className="icon" />
								</button>
							))}
						</div>
					)}
					<h3>Mecanismos de Busca</h3>
				</div>
				<div id="contentWrapper">
					<div id="search">
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								value={inputValue}
								onChange={handleInputChange}
								id="searchInput"
								placeholder="Pesquise"
								autoComplete="off"
							/>
							<button
								type="submit"
								style={{
									display: "none",
								}}
							></button>
						</form>
					</div>
					<div id="shortcuts">
						<h3>Atalhos</h3>
						{homeData && homeData.shortcuts && homeData.shortcuts.length > 0 && (
							<div className="lista">
								{homeData.shortcuts.map((shortcut) => (
									<a
										key={shortcut.name}
										href={shortcut.url}
										className="shortcut"
										rel="noreferrer"
									>
										<div className="image">
											<img
												src={shortcut.image}
												className={shortcut.turnToWhite ? "turnWhite" : ""}
											/>
										</div>
										{shortcut.name.length > 0 && (
											<span className="name">{shortcut.name}</span>
										)}
									</a>
								))}
							</div>
						)}
					</div>
				</div>
			</main>
		</StyledHome>
	)
}
