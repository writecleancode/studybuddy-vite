import { Label } from 'src/components/atoms/Label/StyledLabel';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

type FormProps = {
	value: string;
	onChange: () => void;
	label: string;
	name: string;
	id: string;
	type: string;
};

export const FormField = ({ value, onChange, label, name, id, type = 'text' }: FormProps) => {
	return (
		<Wrapper>
			<Label htmlFor={name}>{label}</Label>
			<Input value={value} onChange={onChange} name={name} id={id} type={type} data-testid={label} />
		</Wrapper>
	);
};
