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

export function defaultHomeData() {
	return {
		searchEngines,
		shortcuts,
	}
}

export interface HomeDataType {
	searchEngines: typeof searchEngines
	shortcuts: typeof shortcuts
}

export interface SearchEngineType {
	name: string
	icon: string
	url: string
}
