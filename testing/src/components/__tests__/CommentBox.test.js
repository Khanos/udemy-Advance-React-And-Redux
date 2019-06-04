import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import { wrap } from 'module';

let wrapped;

// beforeEach and afterEach are Jest functions
beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});

it ('has a text area and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

describe('has a text area and a button', () => {
	// we can set beforeEach inside a describe block, scoped for test inside the describe block
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' }
		});
		wrapped.update();
	});
	it ('has a text area that users can type in', () => {
		//console.log(wrapped.state());
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it ('when form is submitted, text area gets emptied', () => {
		//console.log(wrapped.state().comment);
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		wrapped.find('form').simulate('submit');
		wrapped.update();
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
