import { createContext, useState, useCallback, useContext } from 'react';

const ErrorContext = createContext({
	error: '',
	dispatchError: () => {},
});

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState('');

	const dispatchError = useCallback(message => {
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
