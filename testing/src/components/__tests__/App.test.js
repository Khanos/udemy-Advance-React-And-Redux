import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('Shows a comment box', () => {
	const div = document.createElement('div');

	ReactDOM.render(<App />, div);
	// Looks inside he div
	// and checks to see if the CommentBox is in there
	// console.log(div.innerHTML);
	expect(div.innerHTML).toContain('Comment Box');
	ReactDOM.unmountComponentAtNode(div);
});