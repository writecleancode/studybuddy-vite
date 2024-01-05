import { HttpResponse, http } from 'msw';
import { students } from 'src/mocks/data/students';
import { groups } from 'src/mocks/data/groups';
import { db } from '../db';

export const handlers = [
	http.get('/groups', () => {
		return HttpResponse.json({
			groups: groups,
		});
	}),

	http.get('/groups/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				students: db.student.findMany
			});
		}

		const matchingStudents = db.student.findMany({
			where: {
				group: {
					equals: params.id,
				},
			},
		});
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),

	http.get('/students/:id', ({ params }) => {
		if (!params.id)
			return HttpResponse.json({
				student: db.student.findFirst,
			});

		const matchingStudent = db.student.findFirst({
			where: {
				id: {
					equals: params.id,
				},
			},
		});
		// const matchingStudent = students.find(student => student.id === params.id);
		if (!matchingStudent)
			return HttpResponse.json({
				status: 404,
				error: 'No matching student',
			});

		return HttpResponse.json({
			student: matchingStudent,
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
