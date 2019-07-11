import React from 'react'
import styles from './Avatar.module.scss';

export function Avatar (props) {
	const classes = [styles.avatar];

	if (props.small) classes.push(styles.small)

	return (
		<div className={classes.join(' ')}>
			{props.src ? (
				<img src={props.src} alt="avatar"/>
			) : props.letter && (
				<span className={styles.letter}>{props.letter}</span>
			)}
		</div>
	)
}