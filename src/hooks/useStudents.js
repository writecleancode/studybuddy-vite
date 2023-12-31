import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
	const getGroups = useCallback(async () => {
		try {
			const { data } = await axios.get('/groups');
			return data.groups;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const getStudentsByGroup = useCallback(async groupId => {
		try {
			const { data } = await axios.get(`/groups/${groupId}`);
			return data.students;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const getStudentById = useCallback(async studentId => {
		try {
			const { data } = await axios.get(`/students/${studentId}`);
			return data.student;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const findStudents = async inputValue => {
		if (!inputValue) return [];
		try {
			const { data } = await axios.post('/students/search', { searchPhrase: inputValue });
			return data.students;
		} catch (err) {
			console.log(err);
		}
	};

	return {
		getGroups,
		getStudentsByGroup,
		getStudentById,
		findStudents,
	};
};
