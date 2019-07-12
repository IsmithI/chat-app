import React from "react";
import { useState } from "react";
import { TextInput } from "components";

export function SearchBar(props) {
	const [value, setValue] = useState("");
	const handleChange = val => {
		props.onChange(val);
		setValue(val);
	};

	return <TextInput fullWidth placeholder="Search" value={value} onChange={handleChange} />;
}
