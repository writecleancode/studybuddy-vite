import { http, HttpResponse } from 'msw';
import { db } from '../db';

export const students = [
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
			return new HttpResponse(null, {
				status: 404,
				statusText: 'No matching student',
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
