import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMessage = 'Something went wrong. Please try again, or contact our support';

export const ErrorMessage = ({ message = defaultErrorMessage }) => {
	return (
		<Wrapper>
			<StyledTitle>Ooops</StyledTitle>
			<p>{message}</p>
		</Wrapper>
	);
};
