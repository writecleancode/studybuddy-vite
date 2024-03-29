import { render } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';

const AllTheProviders = ({ children }) => {
	return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
