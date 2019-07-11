import React from 'react';
import { useContext } from 'react';
import ContactsStore from 'stores/ContactsStore';
import styles from './Favorites.module.scss';
import cn from 'classnames';
import { Avatar } from 'components';
import { getAvatarLetters } from 'utils/string';

export function Favorites(props) {
	const classes = cn(styles.root, {
		[styles.hidden]: !props.isOpen
	}); 
	const { contacts } = useContext(ContactsStore);

	return (
		<div className={classes}>
			<div className={styles.contacts}>
			{contacts.map(contact => (
				<div key={contact.id} className={styles.contactContainer}>
					<Avatar letter={getAvatarLetters(contact)}/>
					<h5>{contact.firstName}</h5>
				</div>
			))}
			</div>
		</div>
	);
}