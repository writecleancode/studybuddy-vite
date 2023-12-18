import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsListItem } from 'src/components/molecules/StudentsListItem/StudentsListItem';
import { StyledList, StyledTitle } from './StudentsList.styles';

type StudentsListProps = {
	handleOpenStudentsDetails: (id: number) => void
}

type Student = {
	id: number;
	name: string;
	attendance: string;
	average: string;
	group: string;
};

export const StudentsList = ({ handleOpenStudentsDetails }: StudentsListProps) => {
	const [students, setStudents] = useState<never[] | Student[]>([]);
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
					<StudentsListItem onClick={() => {handleOpenStudentsDetails(userData.id)}} key={userData.name} userData={userData} />
				))}
			</StyledList>
		</>
	);
};
