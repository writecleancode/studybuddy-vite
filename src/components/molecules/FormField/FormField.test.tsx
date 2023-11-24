// import { render, screen } from '../../../test-utils';
import { render, screen } from 'src/test-utils';
import { FormField } from './FormField';

describe('Form Field', () => {
	it('Renders the component', () => {
		render(<FormField checked={false} value='' onChange={() => {}} label='Name' name='name' id='name' type='test' />);
		screen.getByText('Name');
	});
});
