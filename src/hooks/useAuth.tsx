import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

type AuthProviderProps = {
	children: ReactNode;
};

type authDataType = { login: string; password: string };

type AuthContextType = {
	user: null | authDataType;
	signIn: ({ login, password }: authDataType) => void;
	signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	signIn: () => {},
	signOut: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const [user, setUser] = useState(null);

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

	const signIn = async ({ login, password }: authDataType) => {
		try {
			const response = await axios.post('/login', {
				login,
				password,
			});
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (err) {
			console.log(err);
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
