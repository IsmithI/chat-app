import React from "react";
import { useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ChatsStore from "stores/ChatsStore";
import { MessagesListItem, Slide } from "components";
import styles from "./MessagesList.module.scss";

function MessagesListBase() {
	const section = useRef();
	const store = useContext(ChatsStore);

	useEffect(() => {
		store.loadChatsShort();
	}, [store]);

	return (
		<section
			ref={section}
			className={styles.container}>
			<ul className={styles.messagesList}>
				{store.chats.map(chat => (
					<Slide direction="left" key={chat.id}>
						<MessagesListItem {...chat} />
					</Slide>
				))}
			</ul>
		</section>
	);
}

export const MessagesList = observer(MessagesListBase);
