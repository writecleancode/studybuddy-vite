import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTemplate } from '../components/templates/MainTemplate/MainTemplate';
import { theme } from '../assets/styles/theme';
import { GlobalStyle } from '../assets/styles/GlobalStyle';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';

export const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Routes>
							<Route path='/' element={<Navigate to='/group' />} />
							<Route path='/group'>
								<Route path=':id?' element={<Dashboard />} />
							</Route>
						</Routes>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};
