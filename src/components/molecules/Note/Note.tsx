import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { NoteWrapper, StyledDeleteButton } from './Note.styles';
import { useDispatch } from 'react-redux';
import { removeNote } from 'src/store';

type NoteProps = {
	id: string;
	title: string;
	content: string;
};

export const Note = ({ id, title = 'Untitled', content = 'Co content' }: NoteProps) => {
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
