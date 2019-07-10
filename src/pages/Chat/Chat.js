import React from "react";
import { useState } from "react";
import { BottomBar, Container, MessagesList, Header, Contacts } from "components";

export function Chat() {
	const [isOpen, setOpen] = useState(false);
	const toggle = () => setOpen(!isOpen);

	return (
		<Container>
			<Header />
			<Contacts onOpen={toggle} isOpen={isOpen} />
			<MessagesList onOpen={toggle} isOpen={isOpen} />
			<BottomBar />
		</Container>
	);
}
