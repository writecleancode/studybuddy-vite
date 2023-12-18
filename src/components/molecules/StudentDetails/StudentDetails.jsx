import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';

export const StudentDetails = ({ currentStudent }) => {
	return (
		<div>
			<StyledTitle>
				{currentStudent.name} | Group {currentStudent.group}
			</StyledTitle>
			<p>{currentStudent.attendance}</p>
			<StyledAverage $average={currentStudent.average}>{currentStudent.average}</StyledAverage>
		</div>
	);
};
