import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';

export const Modal = ({ handleClose, isOpen, student }) => {
	return (
		<ModalWrapper isOpen={isOpen} onRequestClose={handleClose} appElement={document.querySelector('#root')}>
			<StudentDetails student={student} />
			<Button onClick={handleClose}>Close</Button>
		</ModalWrapper>
	);
};
