import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';

type Student = {
	userData: {
		name: string;
		attendance: string;
		average: string;
	};
	onClick: () => void;
};

export const StudentsListItem = ({ userData: { name, attendance, average }, ...props }: Student) => {
	return (
		<StyledListItem {...props}>
			<StyledAverage $average={Number(average)}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton />
		</StyledListItem>
	);
};
