import React from "react";
import styles from "./MessageListItem.module.scss";
import { Avatar } from "components/Avatar/Avatar";
import cn from 'classnames';

export function MessagesListItem({ label, lastMessage, className }) {
	return (
		<li className={cn(styles.container, className)}>
			<Avatar />
			<div className={styles.content}>
				<div className={styles.username}>{label}</div>
				<div className={styles.message}>{lastMessage || "You have no messages yet"}</div>
			</div>
		</li>
	);
}
