import { api } from "utils/api";
import { createContext } from "react";
import { decorate, observable, action } from 'mobx';

class ContactsStore {
	contacts = [];

	loadContacts = () => {
		api.get("/contacts").then(this.setContacts);
	};

	setContacts = contacts => {
		this.contacts = contacts;
	};

	get favorite() {
		return this.contacts.filter(c => c.favorite);
	}
}

export default createContext(
	decorate(new ContactsStore(), {
		contacts: observable,
		setContacts: action
	})
);
