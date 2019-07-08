import React from 'react';
import styles from './BottomBar.module.scss';

export function BottomBar() {

	return (
		<section className={styles.container}>
			<div className={styles.item}>A</div>
			<div className={styles.item}>B</div>
			<div className={styles.item}>C</div>
			<div className={styles.item}>D</div>
		</section>
	)
}