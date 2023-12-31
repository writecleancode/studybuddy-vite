import { useState } from 'react';
import { useCombobox } from 'downshift';
import { useStudents } from 'src/hooks/useStudents';
import debounce from 'lodash.debounce';
import { Input } from 'src/components/atoms/Input/StyledInput';
import { SearchBarWrapper, SearchResults, SearchResultsItem, SearchWrapper, StatusInfo } from './SearchBar.styles';

export const SearchBar = () => {
	const [matchingStudents, setMatchingStudents] = useState([]);
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
				<Input name='search' id='search' placeholder='find student' {...getInputProps()} />
				<SearchResults aria-label='results' $isVisible={isOpen && matchingStudents.length} {...getMenuProps()}>
					{isOpen &&
						matchingStudents.map((student, index) => (
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
