import React from 'react';
import styles from './Sections.module.scss';

export function Sections (props) {
	
	return (
		<main className={styles.root}>
			{props.children}
		</main>
	)
}