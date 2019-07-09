import React from 'react';
import styles from './Container.module.scss';

export function Container(props) {
	return (
		<main className={styles.root}>
			{props.children}
		</main>
	)
}