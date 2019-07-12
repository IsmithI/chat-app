import React from "react";
import { useContext, useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import ChatsStore from "stores/ChatsStore";
import { MessagesListItem } from "components";
import styles from "./MessagesList.module.scss";
import { useGestures } from "utils/swipe";
import cn from "classnames";
import { List } from "components/List/List";

function MessagesListBase({ onOpen, isOpen }) {
	const section = useRef();
	const store = useContext(ChatsStore);
	const classes = cn(styles.container, {
		[styles.scrolling]: isOpen
	});

	useEffect(() => {
		store.loadChatsShort();
	}, [store]);

	useGestures(
		section,
		{
			onSwipeUp: () => isOpen && onOpen()
		},
		25
	);

	return (
		<List ref={section} className={classes}>
			{store.chats.map(chat => (
				<MessagesListItem key={chat.id} {...chat} />
			))}
		</List>
	);
}

export const MessagesList = observer(MessagesListBase);
