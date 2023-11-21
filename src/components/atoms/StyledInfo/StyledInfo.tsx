import { StyledAttendance, StyledName, Wrapper } from './StyledInfo.styles';

type StudentInfo = {
	name: string;
	attendance: string;
};

export const StyledInfo = ({ name, attendance }: StudentInfo) => {
	return (
		<Wrapper>
			<StyledName>{name}</StyledName>
			<StyledAttendance>attendance: {attendance}</StyledAttendance>
		</Wrapper>
	);
};
