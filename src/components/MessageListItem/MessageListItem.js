import React from 'react'
import styles from './MessageListItem.module.scss';
import { Avatar } from 'components/Avatar/Avatar';

export function MessagesListItem ({ label, lastMessage }) {
	
	return (
		<li className={styles.container}>
			<Avatar/>
			<div className={styles.content}>
				<div className={styles.username}>{label}</div>
				<div className={styles.message}>{lastMessage || 'You have no messages yet'}</div>
			</div>
		</li>
	)
}