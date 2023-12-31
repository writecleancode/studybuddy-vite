import PropTypes from 'prop-types';
import { StyledAverage } from 'src/components/atoms/StyledAverage/StyledAverage';
import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledListItem } from './StudentsListItem.styles';

export const StudentsListItem = ({ userData: { name, attendance, average }, ...props }) => {
	return (
		<StyledListItem {...props}>
			<StyledAverage $average={average}>{average}</StyledAverage>
			<StyledInfo name={name} attendance={attendance} />
			<DeleteButton />
		</StyledListItem>
	);
};

StudentsListItem.propTypes = {
	userData: PropTypes.shape({
		name: PropTypes.string.isRequired,
		attendance: PropTypes.string.isRequired,
		average: PropTypes.number.isRequired,
	}),
};
