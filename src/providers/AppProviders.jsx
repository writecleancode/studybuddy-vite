import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'src/assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { ErrorProvider } from 'src/hooks/useError';
import { AuthProvider } from 'src/hooks/useAuth';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from 'src/store';

export const AppProviders = ({ children }) => {
	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<ErrorProvider>
						<AuthProvider>
							<GlobalStyle />
							{children}
						</AuthProvider>
					</ErrorProvider>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};
