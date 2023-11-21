import { DeleteIcon } from '../../../assets/icons/DeleteIcon';
import { StyledButton } from './DeleteButton.styles';

export const DeleteButton = (props: object) => {
	return (
		<StyledButton {...props}>
			<DeleteIcon />
		</StyledButton>
	);
};
