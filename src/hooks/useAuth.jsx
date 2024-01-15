import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useError } from './useError';

const AuthContext = createContext({
	user: {},
	signIn: () => {},
	signOut: () => {},
});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const { dispatchError } = useError();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			(async () => {
				try {
					const response = await axios.get('/me', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					});
					setUser(response.data);
				} catch (err) {
					console.log(err);
				}
			})();
		}
	}, []);

	const signIn = async ({ login, password }) => {
		try {
			const response = await axios.post('/login', {
				login,
				password,
			});
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (err) {
			dispatchError('Invalid login or password');
		}
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem('token');
	};

	return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw Error('useAuth needs to be used inside AuthContext');
	}

	return auth;
};
