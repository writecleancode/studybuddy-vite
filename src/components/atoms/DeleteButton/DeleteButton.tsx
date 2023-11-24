import { DeleteIcon } from 'src/assets/icons/DeleteIcon';
import { StyledButton } from './DeleteButton.styles';

export const DeleteButton = (props: object) => {
	return (
		<StyledButton {...props}>
			<DeleteIcon />
		</StyledButton>
	);
};
