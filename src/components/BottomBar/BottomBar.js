import React from "react";
import { useState } from "react";
import styles from "./BottomBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "./items";
import cn from "classnames";

export function BottomBar() {
	const [activeTab, setActiveTab] = useState("chats");

	return (
		<nav className={styles.container}>
			{items.map(item => (
				<Item
					key={item.label}
					{...item}
					onClick={setActiveTab}
					isActive={item.label === activeTab}
				/>
			))}
		</nav>
	);
}

function Item({ label, icon, onClick, isActive }) {
	const classes = cn(styles.item, {
		[styles.active]: isActive
	});

	return (
		<div key={label} onClick={() => onClick(label)} className={classes}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
}
