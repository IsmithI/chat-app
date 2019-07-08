import React from 'react'
import { Avatar } from 'components';
import styles from './Header.module.scss';

export function Header (props) {

	return (
		<section className={styles.root}>
			<Avatar small/>
			<div className={styles.title}>
				Messages
			</div>
			<Avatar small/>
		</section>
	)
}