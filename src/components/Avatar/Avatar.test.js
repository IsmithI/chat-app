import React from 'react';
import renderer from 'react-test-renderer';
import { Avatar } from './Avatar';

test('Avatar component renders successfully', () => {
	const component = renderer.create(
		<Avatar letter='AB'/>
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
})