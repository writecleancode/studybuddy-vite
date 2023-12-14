import { StudentsListItem } from './StudentsListItem';

// const mockedData = {
// 	name: 'Adam Romański',
// 	attendance: '87%',
// 	average: '4.2',
// };

const meta = {
	title: 'Components/Molecules/StudentsListItem',
	component: StudentsListItem,
	parameters: {
		layout: 'centered',
	},
	// args: {
	// 	userData: mockedData,
	// },
};

export default meta;

export const BadGrades = {
	args: {
		userData: {
			name: 'Adam Romański',
			attendance: '71%',
			average: '2.9',
		},
	},
};

export const MediumGrades = {
	args: {
		userData: {
			name: 'Adam Romański',
			attendance: '83%',
			average: '3.7',
		},
	},
};

export const GoodGrades = {
	args: {
		userData: {
			name: 'Adam Romański',
			attendance: '95%',
			average: '4.3',
		},
	},
};

export const noAverage = {
	args: {
		userData: {
			name: 'Adam Romański',
			attendance: '95%',
			average: null,
		},
	},
};
