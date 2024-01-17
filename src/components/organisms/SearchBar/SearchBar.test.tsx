import { fireEvent, render, screen } from 'src/test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
	it('Renders the component', () => {
		render(<SearchBar />);
		screen.getByText('Logged as:');
		screen.getByPlaceholderText('find student');
	});

	it('Displays students if search phrase is matching', async () => {
		render(<SearchBar />);
		const input = screen.getByPlaceholderText('find student');
		fireEvent.change(input, { target: { value: 'Beck' } });
		await screen.findByText('Alejandrin Becker');
	});
});
