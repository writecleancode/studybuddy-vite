import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/assets/styles/theme';
import { GlobalStyle } from 'src/assets/styles/GlobalStyle';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'TEST';

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

export const UnathenticatedApp = ({ handleSignIn, loginError }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<FormField
				label='Login'
				name='login'
				id='login'
				autoComplete='username'
				{...register('login', { required: true })}
			/>
			{errors.login && <span>Login is required</span>}
			<FormField
				label='Password'
				name='password'
				id='passwrd'
				type='password'
				autoComplete='current-password'
				{...register('password', { required: true })}
			/>
			{errors.password && <span>Password is required</span>}
			<Button type='submit'>Sign in</Button>
			{loginError && <span>{loginError}</span>}
		</form>
	);
};

export const Root = () => {
	const [user, setUser] = useState(null);
	const [error, setError] = useState(null);

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

	const handleSignIn = async ({ login, password }) => {
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
				{user ? <AuthenticatedApp /> : <UnathenticatedApp loginError={error} handleSignIn={handleSignIn} />}
			</ThemeProvider>
		</Router>
	);
};
