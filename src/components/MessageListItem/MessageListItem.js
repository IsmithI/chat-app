import React from "react";
import styles from "./MessageListItem.module.scss";
import { Avatar } from "components/Avatar/Avatar";
import cn from "classnames";
import { getMessageDate } from 'utils/date';

export function MessagesListItem({ label, lastMessage, className }) {
	const letter = label
		.split(" ")
		.map(w => w.charAt(0))
		.join("");

	return (
		<li className={cn(styles.container, className)}>
			<Avatar letter={letter} />
			<div className={styles.content}>
				<div className={styles.title}>
					<div className={styles.username}>{label}</div>
					<div className={styles.date}>{lastMessage && getMessageDate(lastMessage.sendDate)}</div>
				</div>
				<div className={styles.message}>
					<p>{lastMessage ? lastMessage.content : "You have no messages yet"}</p>
				</div>
			</div>
		</li>
	);
}
