import { ErrorMessage } from './ErrorMessage';

const meta = {
	title: 'Components/Molecules/ErrorMessage',
	component: ErrorMessage,
	parameters: {
		layout: 'centered',
	},
	args: {
		message: 'Something went wrong. Please try again, or contact our support',
	},
};

export default meta;

export const Default = {};

export const WrongLoginOrPassword = {
	args: {
		message: 'Wrong login or password',
	},
};
