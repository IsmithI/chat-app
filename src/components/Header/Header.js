import React from 'react'
import { Avatar } from 'components';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


export function Header (props) {

	return (
		<section className={styles.root}>
			<Avatar small/>
			<div className={styles.title}>
				Messages
			</div>
			<div className={styles.icon}>
				<div>
					<FontAwesomeIcon icon={faPlus}/>
				</div>
			</div>
		</section>
	)
}