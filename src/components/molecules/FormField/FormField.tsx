import { Ref, forwardRef } from 'react';
import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

type FormProps = {
	value?: string;
	onChangeAlternative?: () => void;
	label: string;
	name: string;
	id: string;
	type?: string;
	autoComplete?: string;
};

type refType = Ref<HTMLInputElement>;

export const FormField = forwardRef(
	(
		{ value, onChangeAlternative: onChange, label, name, id, type = 'text', autoComplete, ...props }: FormProps,
		ref: refType
	) => {
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
