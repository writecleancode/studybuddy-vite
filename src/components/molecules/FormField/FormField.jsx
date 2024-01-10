import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

export const FormField = forwardRef(
	({ autoComplete, value, onChange, label, name, id, type = 'text', ...props }, ref) => {
		return (
			<Wrapper>
				<Label htmlFor={name}>{label}</Label>
				<Input
					value={value}
					onChange={onChange}
					name={name}
					id={id}
					type={type}
					data-testid={label}
					autoComplete={autoComplete}
					ref={ref}
					{...props}
				/>
			</Wrapper>
		);
	}
);

FormField.propTypes = {
	autoComplete: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	type: PropTypes.string,
};
