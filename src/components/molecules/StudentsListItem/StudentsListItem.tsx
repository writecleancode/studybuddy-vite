import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';

type Student = {
	userData: {
		name: string;
		attendance: string;
		average: string;
	};
};

export const StudentsListItem = ({ userData: { name, attendance, average } }: Student) => {
	return (
		<StyledListItem>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton />
		</StyledListItem>
	);
};
