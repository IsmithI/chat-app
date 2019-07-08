import React from 'react';
import styles from './Contacts.module.scss';

export function Contacts (props) {

	return (
		<section className={styles.root}>
			<div className={styles.title}>
				<div>Recent</div>
				<div>Favorite</div>
				<div>Newest</div>
			</div>
		</section>
	)
}