import { Label } from '../../atoms/Label/StyledLabel';
import { Input } from '../../atoms/Input/StyledInput';
import { Wrapper } from './FormField.styles';

type FormProps = {
	checked: boolean,
	value: string,
	onChange: () => void,
	label: string,
	name: string,
	id: string,
	type: string
}

export const FormField = ({ checked, value, onChange, label, name, id, type = 'text' }: FormProps) => {
	return (
		<Wrapper>
			<Label htmlFor={name}>{label}</Label>
			<Input value={value} checked={checked} onChange={onChange} name={name} id={id} type={type} data-testid={label} />
		</Wrapper>
	);
};
