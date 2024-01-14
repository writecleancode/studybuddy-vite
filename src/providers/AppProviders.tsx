import { ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { AuthProvider } from 'src/hooks/useAuth';

type AppProvidersProps = {
	children: ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<GlobalStyle />
					{children}
				</AuthProvider>
			</ThemeProvider>
		</Router>
	);
};
