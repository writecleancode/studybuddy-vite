import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/StudentsListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

export const StudentsList = ({ handleOpenStudentDetails }) => {
	const [students, setStudents] = useState([]);
	const { id } = useParams();
	const { getStudentsByGroup } = useStudents();

	useEffect(() => {
		(async () => {
			const data = await getStudentsByGroup(id);
			setStudents(data);
		})();
	}, [id, getStudentsByGroup]);

	return (
		<>
			<StyledTitle>Students list</StyledTitle>
			<StyledList>
				{students.map(userData => (
					<StudentsListItem
						onClick={() => handleOpenStudentDetails(userData.id)}
						key={userData.id}
						userData={userData}
					/>
				))}
			</StyledList>
		</>
	);
};
