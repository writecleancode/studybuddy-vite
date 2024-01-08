import { factory, primaryKey } from '@mswjs/data';
import { faker } from '@faker-js/faker';

faker.seed(5);

const groups = ['A', 'B', 'C'];
const getRandomAverage = () => faker.number.float({ min: 2, max: 5, precision: 0.1 });
const getRandomValue = (array, index) => array[index];
const uppercaseFirstLatter = word => word.slice(0, 1).toUpperCase() + word.slice(1);

export const db = factory({
	student: {
		id: primaryKey(() => faker.string.uuid()),
		name: () => `${faker.person.firstName()} ${faker.person.lastName()}`,
		attendance: () => `${faker.number.int({ min: 0, max: 100 })}%`,
		average: getRandomAverage,
		group: () => getRandomValue(groups, faker.number.int({ min: 0, max: groups.length - 1 })),
		course: () =>
			`${uppercaseFirstLatter(faker.company.buzzAdjective())} ${uppercaseFirstLatter(faker.company.buzzNoun())}`,
		grades: () => [
			{
				subject: 'Business Philosophy',
				average: getRandomAverage(),
			},
			{
				subject: 'Marketing',
				average: getRandomAverage(),
			},
			{
				subject: 'Modern Economy',
				average: getRandomAverage(),
			},
		],
	},
	group: {
		id: primaryKey(String),
	},
});
