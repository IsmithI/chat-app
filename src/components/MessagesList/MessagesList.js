import React from "react";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { chatsStore } from "stores/ChatsStore";
import { MessagesListItem } from "components/MessageListItem/MessageListItem";
import styles from "./MessagesList.module.scss";

function MessagesListBase() {
	const store = useContext(chatsStore);

	useEffect(() => {
		store.loadChatsShort();
	}, [store]);

	return (
		<section className={styles.container}>
			<ul className={styles.messagesList}>
				{store.chats.map(chat => (
					<MessagesListItem key={chat.id} {...chat} />
				))}
			</ul>
		</section>
	);
}

export const MessagesList = observer(MessagesListBase);
