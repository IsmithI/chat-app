import { clamp } from "./math";

/**
 * A function to get a human readable date in a message title
 *
 * @param {Date} date
 */
export function getMessageDate(date) {
	let d = date;
	if (typeof date === "string") d = new Date(date);

	const now = new Date();

	if (now.getMonth() !== d.getMonth() || now.getDate() > d.getDate() + 7) {
		return d.getDate() + "." + appendZero(d.getMonth() + 1) + "." + trimYear(d.getFullYear());
	}

	if (now.getDate() !== d.getDate()) {
		return dayToString(d.getDay());
	}

	return d.getHours() + ":" + appendZero(d.getMinutes());
}

/**
 * A function that appends 0 to the beginning of a number if its larger than 10
 *
 * example: 8 -> 08
 *
 * @param {number} num
 */
function appendZero(num) {
	return num < 10 && num >= 0 ? `0${num}` : num;
}

function dayToString(day) {
	return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][clamp(day, 0, 6)];
}

function trimYear(year) {
	return year.toString().substring(2	);
}