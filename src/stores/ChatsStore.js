import { createContext } from "react";
import { observable, decorate, action } from "mobx";
import { api } from "utils";

class ChatsStore {
	chats = [];

	loadChatsShort = () => {
		api.get("/chats/short").then(this.setChats);
	};

	setChats = chats => {
		this.chats = chats;
	};
}

export const chatsStore = createContext(
	decorate(new ChatsStore(), {
		chats: observable,
		setChats: action
	})
);
