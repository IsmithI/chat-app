import React from "react";
import styles from "./Contacts.module.scss";
import cn from 'classnames';

export function Contacts(props) {
	const classes = cn(styles.title, {
		[styles.hidden]: !props.isOpen
	})
	return (
		<section className={styles.root}>
			<div className={classes}>
				<div>Recent</div>
				<div>Favorite</div>
				<div>Newest</div>
			</div>
		</section>
	);
}
