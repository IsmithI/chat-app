import React from "react";
import { BottomBar, Container, MessagesList, Sections, Header, Contacts } from "components";

export function Chat() {
	return (
		<Container>
			<Header />
			<Sections>
				<Contacts />
				<MessagesList />
			</Sections>
			<BottomBar />
		</Container>
	);
}
