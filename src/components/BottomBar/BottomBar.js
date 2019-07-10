import React from "react";
import styles from "./BottomBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCommentDots, faUserFriends, faCog } from "@fortawesome/free-solid-svg-icons";

export function BottomBar() {
	return (
		<section className={styles.container}>
			<div className={styles.item}>
				<FontAwesomeIcon icon={faBars} />
			</div>
			<div className={styles.item + ' ' + styles.active}>
				<FontAwesomeIcon icon={faCommentDots} />
			</div>
			<div className={styles.item}>
				<FontAwesomeIcon icon={faUserFriends} />
			</div>
			<div className={styles.item}>
				<FontAwesomeIcon icon={faCog} />
			</div>
		</section>
	);
}
