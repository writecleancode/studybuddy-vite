import { useState } from 'react';
import { useCombobox } from 'downshift';
import { useStudents } from '../../../hooks/useStudents';
import debounce from 'lodash.debounce';
import { Input } from '../../atoms/Input/StyledInput';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from './SearchBar.styles';

type Student = {
	name: string;
	attendance: string;
	average: string;
};

export const SearchBar = () => {
	const [matchingStudents, setMatchingStudents] = useState<never[] | Student[]>([]);
	const { findStudents } = useStudents();

	const getMatchingStudents = debounce(async ({ inputValue }) => {
		const results = await findStudents(inputValue);
		setMatchingStudents(results);
	}, 500);

	const { isOpen, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
		onInputValueChange: getMatchingStudents,
		items: matchingStudents,
	});

	return (
		<SearchBarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<h6>Teacher</h6>
			</StatusInfo>
			<SearchWrapper>
				<Input name='search' placeholder='find student' {...getInputProps()} />
				<SearchResults $isVisible={isOpen && matchingStudents.length} {...getMenuProps()}>
					{isOpen &&
						matchingStudents.map((student: Student, index: number) => (
							<SearchResultsItem
								key={student.name}
								$isHighlighted={highlightedIndex === index}
								{...getItemProps({ item: student, index })}>
								{student.name}
							</SearchResultsItem>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
