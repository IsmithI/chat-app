import React from "react";
import ContactsStore from "stores/ContactsStore";
import { useContext, useEffect } from "react";
import { List } from "components/List/List";
import { ListItem } from "components/List/ListItem";
import { Avatar } from "components";
import { getAvatarLetters } from "utils";
import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./Contacts.module.scss";
import { observer } from "mobx-react-lite";

export const Contacts = observer(props => {
	const contactsStore = useContext(ContactsStore);

	useEffect(() => {
		contactsStore.loadContacts();
	}, [contactsStore]);

	return (
		<>
			<div className={styles.searchBar}>
				<SearchBar onChange={contactsStore.setSearchValue} />
			</div>
			<List className={styles.root}>
				{contactsStore.searchedContacts.map(contact => (
					<ListItem
						key={contact.id}
						avatar={<Avatar letter={getAvatarLetters(contact)} />}
						title={contact.firstName + " " + contact.lastName}
					/>
				))}
			</List>
		</>
	);
});
