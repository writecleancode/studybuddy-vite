import PropTypes from 'prop-types';
import { StyledInfo } from 'src/components/atoms/StyledInfo/StyledInfo';
import { DeleteButton } from 'src/components/atoms/DeleteButton/DeleteButton';
import { StyledAverage, StyledListItem } from './StudentsListItem.styles';

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
		average: PropTypes.string.isRequired,
	}),
};
