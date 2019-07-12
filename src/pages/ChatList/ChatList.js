import React from "react";
import { useState } from "react";
import { MessagesList, Contacts } from "components";

export function ChatList() {
	const [isOpen, setOpen] = useState(false);
	const toggle = () => setOpen(!isOpen);

	return (
		<>
			<Contacts onOpen={toggle} isOpen={isOpen} />
			<MessagesList onOpen={toggle} isOpen={isOpen} />
		</>
	);
}
