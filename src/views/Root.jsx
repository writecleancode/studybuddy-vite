import { useForm } from 'react-hook-form';
import { useAuth } from 'src/hooks/useAuth';
import { useError } from 'src/hooks/useError';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MainTemplate } from 'src/components/templates/MainTemplate/MainTemplate';
import { Dashboard } from './Dashboard';
import { Wrapper } from './Root.styles';
import { FormField } from 'src/components/molecules/FormField/FormField';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ErrorMessage } from 'src/components/molecules/ErrorMessage/ErrorMessage';
import { Notes } from './Notes';

export const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Navigate to='/group' />} />
					<Route path='/group'>
						<Route path=':id?' element={<Dashboard />} />
					</Route>
					<Route path='/notes' element={<Notes />} />
				</Routes>
			</Wrapper>
		</MainTemplate>
	);
};

export const UnathenticatedApp = () => {
	const { signIn } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(signIn)}
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
				id='password'
				type='password'
				autoComplete='current-password'
				{...register('password', { required: true })}
			/>
			{errors.password && <span>Password is required</span>}
			<Button type='submit'>Sign in</Button>
		</form>
	);
};

export const Root = () => {
	const auth = useAuth();
	const { error } = useError();

	return (
		<>
			{error ? <ErrorMessage message={error} /> : null}
			{auth.user ? <AuthenticatedApp /> : <UnathenticatedApp />}
		</>
	);
};
