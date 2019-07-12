import React from "react";
import { useState } from "react";
import { TextInput } from "components";
import styles from "./SearchBar.module.scss";

export function SearchBar(props) {
	const [value, setValue] = useState("");
	const handleChange = val => {
		props.onChange(val);
		setValue(val);
	};

	return (
		<TextInput
			fullWidth
			className={styles.input}
			placeholder="Search"
			value={value}
			onChange={handleChange}
		/>
	);
}
