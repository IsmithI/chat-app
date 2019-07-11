export function getAvatarLetters(label) {
	if (typeof label === "string")
		return label
			.split(" ")
			.map(w => w.charAt(0))
			.join("");

	return getAvatarLetters(label.firstName + ' ' + label.lastName);
}
