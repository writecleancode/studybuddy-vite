import { render, screen } from 'src/test-utils';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Renders the component', () => {
		render(<FormField label='Name' name='name' id='name' />);
		screen.getByText('Name');
	});
});
