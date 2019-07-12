import React from "react";
import cn from "classnames";
import styles from "./TextInput.module.scss";

export function TextInput({ placeholder, value, onChange, className, fullWidth, ...props }) {
	const handleChange = e => onChange(e.target.value);
	const classes = cn(styles.root, className, {
		[styles.fullWidth]: fullWidth
	});

	return (
		<input
			className={classes}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={handleChange}
			{...props}
		/>
	);
}
