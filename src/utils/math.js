export function clamp(value, start, end) {
	return Math.max(Math.min(value, end), start)
}