import React from 'react'
import { Avatar } from 'components';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from 'react-router-dom';
import { locationToString } from 'utils';


export const Header = withRouter(({ location }) => {

	return (
		<section className={styles.root}>
			<Avatar small/>
			<div className={styles.title}>
				{locationToString(location.pathname)}
			</div>
			<div className={styles.icon}>
				<div>
					<FontAwesomeIcon icon={faPlus}/>
				</div>
			</div>
		</section>
	)
})