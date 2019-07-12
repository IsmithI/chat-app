import React from 'react';
import styles from './ListItem.module.scss';
import cn from 'classnames';

export function ListItem({ className, avatar, title, subtitle }) {
	return (
		<li className={cn(styles.container, className)}>
			{avatar && avatar}
			<section className={styles.content}>
				{title && title}
				{subtitle && subtitle}
			</section>
		</li>
	);
}