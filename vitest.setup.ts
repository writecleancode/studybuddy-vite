import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from './src/mocks/handlers';
import { db } from './src/mocks/db';

const server = setupServer(...handlers);

db.group.create({ id: 'A' });
db.group.create({ id: 'B' });
db.group.create({ id: 'C' });

db.teacher.create();

for (let i = 0; i < 16; i++) {
	db.student.create();
}

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
