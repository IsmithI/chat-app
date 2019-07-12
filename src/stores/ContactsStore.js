import { api } from "utils/api";
import { createContext } from "react";
import { decorate, observable, action, computed } from "mobx";

class ContactsStore {
	searchValue = "";
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

	get searchedContacts() {
		return this.searchValue
			? this.contacts.filter(c => `${c.firstName} ${c.lastName}`.includes(this.searchValue))
			: this.contacts;
	}

	setSearchValue = searchValue => {
		this.searchValue = searchValue;
	}
}

decorate(ContactsStore, {
	contacts: observable,
	searchValue: observable,
	setContacts: action,
	setSearchValue: action,
	favorite: computed,
	searchedContacts: computed
});

export default createContext(new ContactsStore());
