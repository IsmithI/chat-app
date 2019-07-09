import React from 'react';
import styles from './Sections.module.scss';

export function Sections (props) {
	
	return (
		<div className={styles.root}>
			{props.children}
		</div>
	)
}