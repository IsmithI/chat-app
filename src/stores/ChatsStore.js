import { createContext } from "react";
import { observable, decorate, action } from "mobx";
import { api } from "utils";

class ChatsStore {
	chats = [];
	favoriteContacts = [];

	constructor() {
		this.socket = new WebSocket("ws://localhost:3001/ws");
		this.socket.onopen = () => {
			console.log("Socket is opened! Sending test message");
			this.socket.send("Hello, this is a test message!");
		};
		this.socket.onmessage = msg => console.log(msg);
	}

	loadChatsShort = () => {
		return api.get("/chats/short").then(this.setChats);
	};

	loadFavoriteContacts = () => {
		return api.get("/contacts/favorite").then(this.setFavoriteContacts);
	};

	setChats = chats => {
		this.chats = chats;
	};

	setFavoriteContacts = contacts => {
		this.favoriteContacts = contacts;
	};
}

decorate(ChatsStore, {
	chats: observable,
	favoriteContacts: observable,
	setChats: action,
	setFavoriteContacts: action
});

export default createContext(new ChatsStore());
