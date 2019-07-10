import React from "react";
import { useState} from 'react';
import { BottomBar, Container, MessagesList, Sections, Header, Contacts } from "components";

export function Chat() {
	const [isOpen, setOpen] = useState(false);
	const toggle = () => setOpen(!isOpen)

	return (
		<Container>
			<Header />
			<Sections>
				<Contacts onOpen={toggle} isOpen={isOpen}/>
				<MessagesList />
			</Sections>
			<BottomBar />
		</Container>
	);
}
