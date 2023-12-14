import PropTypes from 'prop-types';
import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

export const FormField = ({ value, onChange, label, name, id, type = 'text' }) => {
	return (
		<Wrapper>
			<Label htmlFor={name}>{label}</Label>
			<Input value={value} onChange={onChange} name={name} id={id} type={type} data-testid={label} />
		</Wrapper>
	);
};

FormField.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};
