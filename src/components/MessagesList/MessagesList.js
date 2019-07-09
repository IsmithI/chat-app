import React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { observer } from "mobx-react-lite";
import { chatsStore } from "stores/ChatsStore";
import { MessagesListItem, Slide } from "components";
import styles from "./MessagesList.module.scss";
import { useSwipeOn } from "utils/swipe";

function MessagesListBase() {
	const [locked, setLocked] = useState(false);
	const section = useRef();
	const store = useContext(chatsStore);

	useEffect(() => {
		store.loadChatsShort();
	}, [store]);

	const cursor = useSwipeOn(section, 200);
	const up = cursor.res > 0;

	useEffect(() => {
		if (cursor.dragging) {
			if (cursor.res > 200)
				setLocked(true)

			if (cursor.res < 200)
				setLocked(false)
		}
	}, [cursor]);


	const position = locked ? 200 : Math.min(cursor.res, 200);
	console.log(cursor)

	return (
		<section
			ref={section}
			className={styles.container}
			style={{
				transform: `translateY(${position}px)`,
				transition: !cursor.dragging && "transform 0.3s ease-in-out"
			}}
		>
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
