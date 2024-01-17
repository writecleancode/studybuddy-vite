import { ReactNode, createContext, useCallback, useContext, useState } from 'react';

type ErrorProviderProps = {
	children: ReactNode;
};

type ErrorContextType = {
	error: string;
	dispatchError: (message: string) => void;
};

export const ErrorContext = createContext<ErrorContextType>({
	error: '',
	dispatchError: () => {},
});

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
	const [error, setError] = useState('');

	const dispatchError = useCallback((message: string) => {
		setError(message);
		setTimeout(() => {
			setError('');
		}, 7000);
	}, []);

	return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
	const errorContext = useContext(ErrorContext);

	if (!errorContext) throw Error('useError needs to be used inside ErrorProvider');

	return errorContext;
};
