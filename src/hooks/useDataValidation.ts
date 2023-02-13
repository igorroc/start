export function isValidUrl(str: string) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?(www\\.)?([a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}(\\/[a-zA-Z0-9-_]+)*(\\.[a-zA-Z0-9-]{2,})?$"
	)
	return pattern.test(str)
}
