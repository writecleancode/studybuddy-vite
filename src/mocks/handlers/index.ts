import { HttpResponse, http } from 'msw';
import { groups } from 'src/mocks/data/groups';
import { students } from 'src/mocks/data/students';

export const handlers = [
	http.get('/groups', () => {
		return HttpResponse.json({
			groups: groups,
		});
	}),

	http.get('/students/:group', ({ params }) => {
		if (params.group === 'undefined') {
			return HttpResponse.json({
				students: students,
			});
		}

		const matchingStudents = students.filter(student => student.group === params.group);
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),

	http.post('/students/search', async ({ request }) => {
		const { searchPhrase }: any = await request.json();
		const matchingStudents = searchPhrase
			? students.filter(student => student.name.toLowerCase().includes(searchPhrase.toLowerCase()))
			: [];
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
