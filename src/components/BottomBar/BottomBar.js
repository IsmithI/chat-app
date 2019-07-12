import React from "react";
import styles from "./BottomBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import items from "./items";
import cn from "classnames";
import { withRouter } from 'react-router-dom';

export const BottomBar = withRouter(({ history, location }) => {
	const activeTab = location.pathname;
	const link = (path) => history.push(path);

	return (
		<nav className={styles.container}>
			{items.map(item => (
				<Item
					key={item.label}
					{...item}
					onClick={link}
					isActive={item.path === activeTab}
				/>
			))}
		</nav>
	);
})

function Item({ label, icon, onClick, isActive, path }) {
	const classes = cn(styles.item, {
		[styles.active]: isActive
	});

	return (
		<div key={label} onClick={() => onClick(path)} className={classes}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
}
