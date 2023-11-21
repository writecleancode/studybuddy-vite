import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/StudentsListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

export const StudentsList = () => {
	const [students, setStudents] = useState([]);
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
