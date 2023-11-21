import { StyledAverage, StyledListItem } from './StudentsListItem.styles';
import { StyledInfo } from '../../atoms/StyledInfo/StyledInfo';
import { DeleteButton } from '../../atoms/DeleteButton/DeleteButton';

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
