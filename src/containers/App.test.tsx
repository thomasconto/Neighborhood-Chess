import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App container', () => {
	test('should render the App UI', () => {
		const instance = shallow(<App />);

		expect(instance.hasClass('App')).toBeTruthy();
	});
});
