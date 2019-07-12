import React from "react";
import renderer from "react-test-renderer";
import { BottomBar } from "./BottomBar";
import { BrowserRouter as Router } from "react-router-dom";

test("BottomBar renders without errors", () => {
	const component = renderer.create(
		<Router>
			<BottomBar />
		</Router>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});