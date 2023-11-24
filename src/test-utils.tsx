import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';

type AllTheProvidersProps = {
	children: ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui: any, options?: object) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
