import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';

export const addNote = payload => {
	return {
		type: 'notes/add',
		payload: {
			id: uuid(),
			...payload,
		},
	};
};

export const removeNote = payload => {
	return {
		type: 'notes/remove',
		payload,
	};
};

const initialState = {
	notes: [
		{
			id: uuid(),
			title: 'Title ipsum',
			content: 'Lorem ipsum dolor sit amet',
		},
	],
};

const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'notes/add':
			return {
				...state,
				notes: [...state.notes, action.payload],
			};

		case 'notes/remove':
			return {
				...state,
				// notes: [...state.notes.slice[(0, action.index)], ...state.notes.slice[action.index + 1]],
				notes: state.notes.filter(note => note.id !== action.payload.id),
			};

		default:
			return state;
	}
};

export const store = createStore(notesReducer);
