import { createContext } from "react";

class MainStore {
	user = {
		id: 0,
		firstName: "Oleg",
		lastName: "Bondar"
	};

	get username() {
		return this.user.firstName + ' ' + this.user.lastName;
	}
}

export default createContext(new MainStore());
