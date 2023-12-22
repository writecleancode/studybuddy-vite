import { setupWorker } from 'msw/browser';
import { handlers } from './handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const createStudents = () => {
	for (let i = 0; i < 16; i++) {
		db.student.create();
	}
};

createStudents();

window.mocks = {
	createStudents,
	getStudents: () => db.student.getAll(),
};
