import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import commentsReducer from 'reducers/comments';
import Root from 'Root';

let wrapped;

// beforeEach and afterEach are Jest functions
beforeEach(() => {
	wrapped = mount(
		<Root>
			<CommentBox />
		</Root>
	);
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

it('Handles action with unknown type', () => {
	const newState = commentsReducer([],{type: 'asdasdasd'});
	expect(newState).toEqual([]);
});
