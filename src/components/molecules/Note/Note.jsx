import { useDispatch } from 'react-redux';
import { removeNote } from 'src/store';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';

export const Note = ({ id, title = 'Untitled', content = 'Co content' }) => {
	const dispatch = useDispatch();

	const handleRemoveNote = () => {
		dispatch(removeNote({ id }));
	};

	return (
		<NoteWrapper>
			<StyledTitle>{title}</StyledTitle>
			<p>{content}</p>
			<StyledDeleteButton onClick={handleRemoveNote} />
		</NoteWrapper>
	);
};
