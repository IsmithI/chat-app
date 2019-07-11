import React from 'react';
import renderer from 'react-test-renderer';
import { BottomBar } from './BottomBar';

test('BottomBar renders without errors', () => {
	const component = renderer.create(
		<BottomBar/>
	);

	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
	
})