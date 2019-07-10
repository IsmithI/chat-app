import React from "react";
import styles from "./Contacts.module.scss";
import cn from "classnames";
import ContactsStore from "stores/ContactsStore";
import { useContext, useEffect } from "react";
import { Favorites } from "./Favorites/Favorites";

export function Contacts(props) {
	const containerClasses = cn(styles.container, {
		[styles.hidden]: !props.isOpen
	});

	const contactsStore = useContext(ContactsStore);

	useEffect(() => {
		contactsStore.loadContacts();
	}, [contactsStore]);

	return (
		<>
			<div className={styles.rippleContainer}>
				<div className={styles.ripple} onClick={props.onOpen}/>
			</div>
			<div className={containerClasses}>
				<Title />
				<Favorites isOpen={props.isOpen}/>
			</div>
		</>
	);
}

function Title() {
	return (
		<div className={styles.title}>
			<div>Recent</div>
			<div>Favorite</div>
			<div>Newest</div>
		</div>
	);
}
