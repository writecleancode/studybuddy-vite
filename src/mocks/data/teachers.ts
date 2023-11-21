type Teachers = {
	name: string;
	subjects: string[];
	login: string;
	password: string;
}[];

export const teachers: Teachers = [
	{
		name: 'Jacek Sobczak',
		subjects: ['Modern economy', 'Business Philosophy'],
		login: 'j.sobczak@react.com',
		password: '1234',
	},
];
