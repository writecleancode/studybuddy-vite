import { HttpResponse, http } from 'msw';
import { students } from 'src/mocks/data/students';
import { groups } from 'src/mocks/data/groups';

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
		const data = await request.json();
		const matchingStudents = data.searchPhrase
			? students.filter(student => student.name.toLowerCase().includes(data.searchPhrase.toLowerCase()))
			: [];
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
