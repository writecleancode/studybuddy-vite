import { HttpResponse, http } from 'msw';
import { db } from '../db';

export const handlers = [
	http.get('/groups', () => {
		const groups = db.group.getAll();
		const groupNames = groups.map(group => group.id);
		return HttpResponse.json({
			groups: groupNames,
		});
	}),

	http.get('/groups/:id', ({ params }) => {
		if (params.id === 'undefined') {
			return HttpResponse.json({
				status: 404,
				error: 'Please prodive the group ID',
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
		if (!params.id) {
			return HttpResponse.json({
				student: db.student.findFirst,
			});
		}

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
		const matchingStudents = db.student.findMany({
			where: {
				name: {
					// contains: data.searchPhrase.toLowerCase(),
					contains: data.searchPhrase,
				},
			},
		});
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
