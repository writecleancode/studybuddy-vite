import { fireEvent, render, screen, waitFor } from 'src/test-utils';
import '@testing-library/jest-dom'
import { setupServer } from 'msw/node';
import { handlers } from 'src/mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
	beforeAll(() => server.listen());
	afterEach(() => server.resetHandlers());
	afterAll(() => server.close());

	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Logged as:');
		screen.getByPlaceholderText('find student');
	});

	it('Displays students if search phrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'leja' } });
		await screen.findByText('Weronika Leja');
	});

	it('Hides the results when input is empty', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'leja' } });
		await screen.findByText('Weronika Leja');

		fireEvent.change(input, { target: { value: '' } });
		await waitFor(() => {
			expect(screen.getByLabelText('results')).not.toBeVisible();
		});
	});
});
