import { useCallback } from 'react';
import axios from 'axios';

type groupIdType = string | undefined;

export const useStudents = () => {
	const getGroups = useCallback(async () => {
		try {
			const { data } = await axios.get('/groups');
			return data.groups;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const getStudents = useCallback(async (groupId: groupIdType) => {
		try {
			const { data } = await axios.get(`/students/${groupId}`);
			return data.students;
		} catch (err) {
			console.log(err);
		}
	}, []);

	const findStudents = async (inputValue: string) => {
		if (!inputValue) return [];
		try {
			const { data } = await axios.post('/students/search', { searchPhrase: inputValue });
			return data.students;
		} catch (err) {
			console.log(err);
		}
	};

	return {
		getGroups: getGroups,
		getStudents: getStudents,
		findStudents: findStudents,
	};
};
