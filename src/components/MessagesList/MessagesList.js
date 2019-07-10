import React from "react";
import { useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ChatsStore from "stores/ChatsStore";
import { MessagesListItem, Slide } from "components";
import styles from "./MessagesList.module.scss";
import { useGestures } from "utils/swipe";
import cn from 'classnames';

function MessagesListBase({ onOpen, isOpen }) {
	const section = useRef();
	const store = useContext(ChatsStore);

	useEffect(() => {
		store.loadChatsShort();
	}, [store]);

	const [pos, dragging] = useGestures(
		section,
		{
			onSwipeUp: () => {
				if (isOpen) onOpen();
			}
		},
		25
	);

	const classes = cn(styles.container, {
		[styles.scrolling]: isOpen
	});

	return (
		<section ref={section} className={classes}>
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
