import { HttpResponse, http } from 'msw';
import { db } from '../db';

export const students = [
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
		const matchingStudents = db.student.findMany({
			where: {
				name: {
					contains: searchPhrase,
				},
			},
		});
		return HttpResponse.json({
			students: matchingStudents,
		});
	}),
];
