import React from "react";
import { BottomBar, MessagesList, Sections, Header, Contacts } from "components";

export function Chat() {
	return (
		<>
			<Sections>
				<Header/>
				<Contacts/>
				<MessagesList />
			</Sections>
			<BottomBar />
		</>
	);
}
