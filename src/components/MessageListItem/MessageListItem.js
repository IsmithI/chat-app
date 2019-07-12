import React from "react";
import styles from "./MessageListItem.module.scss";
import { Avatar } from "components/Avatar/Avatar";
import { getMessageDate } from "utils/date";
import { getAvatarLetters } from "utils/string";
import { ListItem } from "components/List/ListItem";

export function MessagesListItem({ label, lastMessage }) {
	return (
		<ListItem
			
			avatar={<Avatar letter={getAvatarLetters(label)} />}
			title={
				<header className={styles.title}>
					<p className={styles.username}>{label}</p>
					<p className={styles.date}>{lastMessage && getMessageDate(lastMessage.sendDate)}</p>
				</header>
			}
			subtitle={
				<article className={styles.message}>
					<p>{lastMessage ? lastMessage.content : "You have no messages yet"}</p>
				</article>
			}
		/>
	);
}
