import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage';
import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledListItem } from './StudentsListItem.styles';

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
