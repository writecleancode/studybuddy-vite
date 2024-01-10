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

export const UnathenticatedApp = ({ handleSignIn }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = ({ login, password }) => handleSignIn({ login, password });

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
			}}>
			<FormField label='Login' name='login' id='login' autoComplete='username' {...register('login')} />
			<FormField
				label='Password'
				name='password'
				id='passwrd'
				type='password'
				autoComplete='current-password'
				{...register('password')}
			/>
			<Button type='submit'>Sign in</Button>
		</form>
	);
};

export const Root = () => {
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

	const handleSignIn = async ({ login, password }) => {
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

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{user ? <AuthenticatedApp /> : <UnathenticatedApp handleSignIn={handleSignIn} />}
			</ThemeProvider>
		</Router>
	);
};
