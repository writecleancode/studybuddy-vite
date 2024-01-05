import { HttpResponse, http } from 'msw';
import { groups } from 'src/mocks/data/groups';
import { students } from 'src/mocks/data/students';
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
				students: db.student.findMany({}),
			});
		}

		return HttpResponse.json({
			students: db.student.findMany({
				where: {
					group: {
						equals: params.id as string,
					},
				},
			}),
		});
	}),

	http.get('/students/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				student: db.student.findFirst,
			});
		}

		const matchingStudent = db.student.findFirst({
			where: {
				id: {
					equals: params.id as string,
				},
			},
		});
		if (!matchingStudent) {
			return new HttpResponse('No matching student', {
				status: 404,
			});
		}

		return HttpResponse.json({
			student: matchingStudent,
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
