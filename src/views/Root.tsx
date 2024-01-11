import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';

export const AuthenticatedApp = () => {
	return (
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
	);
};

type Inputs = {
	login: string;
	password: string;
};

type UnauthenticatedAppProps = {
	handleSignIn: ({ login, password }: handleSignInTypes) => Promise<void>;
	loginError: string;
};

export const UnauthenticatedApp = ({ handleSignIn, loginError }: UnauthenticatedAppProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				minHeight: '100vh',
			}}>
			<FormField label='Login' id='login' autoComplete='username' {...register('login', { required: true })} />
			{errors.login && <span>Login is required</span>}
			<FormField
				label='Password'
				id='password'
				type='password'
				autoComplete='current-password'
				{...register('password', { required: true })}
			/>
			{errors.password && <span>Password is required</span>}
			<Button type='submit'>Sign In</Button>
			{loginError && <span>{loginError}</span>}
		</form>
	);
};

type handleSignInTypes = { login: string; password: string };

export const Root = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');

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

	const handleSignIn = async ({ login, password }: handleSignInTypes) => {
		try {
			const response = await axios.post('/login', {
				login,
				password,
			});
			setUser(response.data);
			localStorage.setItem('token', response.data.token);
		} catch (err) {
			setError('Please provide valid user data');
		}
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp loginError={error} handleSignIn={handleSignIn} />}
			</ThemeProvider>
		</Router>
	);
};
