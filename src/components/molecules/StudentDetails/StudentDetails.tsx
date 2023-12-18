import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';
import { Student } from 'src/views/Dashboard';

type StudentDetailsProps = {
	currentStudent: Student | Record<string, never>;
};

export const StudentDetails = ({ currentStudent }: StudentDetailsProps) => {
	return (
		<div>
			<StyledTitle>
				{currentStudent.name} | Group {currentStudent.group}
			</StyledTitle>
			<p>Attendance: {currentStudent.attendance}</p>
			<StyledAverage $average={Number(currentStudent.average)}>{currentStudent.average}</StyledAverage>
		</div>
	);
};
