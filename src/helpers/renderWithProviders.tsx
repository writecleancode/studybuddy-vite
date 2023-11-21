import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { StudentsProvider } from 'src/providers/StudentsProvider';

export const renderWithProviders = children => {
	render(
		<ThemeProvider theme={theme}>
			<StudentsProvider>{children}</StudentsProvider>
		</ThemeProvider>
	);
};
