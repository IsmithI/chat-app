import React from "react";
import styles from "./Contacts.module.scss";
import cn from "classnames";
import ContactsStore from "stores/ContactsStore";
import { useContext, useEffect, useRef } from "react";
import { Favorites } from "./Favorites/Favorites";
import { useGestures } from "utils/swipe";

export function Contacts(props) {
	const containerClasses = cn(styles.container, {
		[styles.hidden]: !props.isOpen
	});

	const contactsStore = useContext(ContactsStore);
	const el = useRef();
	const [pos, dragging] = useGestures(
		el,
		{
			onSwipeUp: () => {
				if (props.isOpen) props.onOpen();
			},
			onSwipeDown: () => {
				if (!props.isOpen) props.onOpen();
			}
		},
		25
	);

	useEffect(() => {
		contactsStore.loadContacts();
	}, [contactsStore]);

	const style = {
		transform: `translateY(${pos / 4}px)`,
		transition: !dragging && `transform 0.3s ease-out`
	};

	return (
		<>
			<div ref={el} className={styles.rippleContainer}>
				<div className={styles.ripple} onClick={props.onOpen} style={style} />
			</div>
			<div className={containerClasses}>
				<Title />
				<Favorites isOpen={props.isOpen} />
			</div>
		</>
	);
}

function Title() {
	return (
		<nav className={styles.title}>
			<div>Recent</div>
			<div>Favorite</div>
			<div>Newest</div>
		</nav>
	);
}
