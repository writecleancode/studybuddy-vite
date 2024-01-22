import { useAuth } from 'src/hooks/useAuth';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
	const { signOut } = useAuth();

	return (
		<Wrapper>
			<Logo>
				<p>Study Buddy</p>
			</Logo>
			<StyledLink to='/group'>Dashboard</StyledLink>
			<StyledLink to='/notes'>Notes</StyledLink>
			<StyledLink as='a' to='/group' onClick={signOut}>
				Log out
			</StyledLink>
		</Wrapper>
	);
};
