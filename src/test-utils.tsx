import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';

type AllTheProvidersProps = {
	children: ReactNode;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
	return <AppProviders>{children}</AppProviders>;
};

const customRender = (ui: any, options?: object) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
