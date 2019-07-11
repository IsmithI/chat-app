import React from "react";
import styles from "./MessageListItem.module.scss";
import { Avatar } from "components/Avatar/Avatar";
import cn from "classnames";
import { getMessageDate } from "utils/date";
import { getAvatarLetters } from "utils/string";

export function MessagesListItem({ label, lastMessage, className }) {
	return (
		<li className={cn(styles.container, className)}>
			<Avatar letter={getAvatarLetters(label)} />
			<section className={styles.content}>
				<header className={styles.title}>
					<p className={styles.username}>{label}</p>
					<p className={styles.date}>{lastMessage && getMessageDate(lastMessage.sendDate)}</p>
				</header>
				<article className={styles.message}>
					<p>{lastMessage ? lastMessage.content : "You have no messages yet"}</p>
				</article>
			</section>
		</li>
	);
}
