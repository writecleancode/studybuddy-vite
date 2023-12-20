import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage';
import { BigAverage, StyledDetails, StyledInfo, StyledLabel, StyledSubjectInfo, Wrapper } from './StudentDetails.styles';

export const StudentDetails = ({ student }) => {
	return (
		<Wrapper>
			<BigAverage $average={student.average}>{student.average}</BigAverage>
			<StyledTitle $isBig>{student.name}</StyledTitle>
			<StyledDetails>
				<StyledLabel>Course:</StyledLabel>
				<StyledInfo $isBig>{student.course}</StyledInfo>
				<StyledLabel>Average grades:</StyledLabel>
				{student.grades.map(({ subject, average }) => (
					<StyledSubjectInfo key={subject}>
						<StyledInfo>{subject}</StyledInfo>
						<StyledAverage $average={average}>{average}</StyledAverage>
					</StyledSubjectInfo>
				))}
			</StyledDetails>
		</Wrapper>
	);
};
