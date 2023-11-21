import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from '../../../hooks/useStudents';
import { StyledList, StyledTitle } from './StudentsList.styles';
import { StudentsListItem } from '../../molecules/StudentsListItem/StudentsListItem';

type Student = {
	name: string;
	attendance: string;
	average: string;
};

export const StudentsList = () => {
	const [students, setStudents] = useState<never[] | Student[]>([]);
	const { id } = useParams();
	const { getStudents } = useStudents();

	useEffect(() => {
		(async () => {
			const data = await getStudents(id);
			setStudents(data);
		})();
	}, [id, getStudents]);

	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(userData => (
					<StudentsListItem key={userData.name} userData={userData} />
				))}
			</StyledList>
		</>
	);
};
