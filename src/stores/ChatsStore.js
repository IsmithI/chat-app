import { createContext } from "react";
import { observable, decorate, action } from "mobx";
import { api } from "utils";

class ChatsStore {
	chats = [];
	favoriteContacts = [];

	loadChatsShort = () => {
		return api.get("/chats/short").then(this.setChats);
	};

	loadFavoriteContacts = () => {
		return api.get("/contacts/favorite").then(this.setFavoriteContacts);
	};

	setChats = chats => {
		this.chats = chats;
	};

	setFavoriteContacts = (contacts) => {
		this.favoriteContacts = contacts;
	}
}

export default createContext(
	decorate(new ChatsStore(), {
		chats: observable,
		favoriteContacts: observable,
		setChats: action,
		setFavoriteContacts: action,
	})
);
