import { createPortal } from 'react-dom';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Student } from 'src/views/Dashboard';

type ModalProps = {
	handleCloseModal: () => void;
	currentStudent: Student | Record<string, never>;
};

export const Modal = ({ handleCloseModal, currentStudent }: ModalProps) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails currentStudent={currentStudent} />
			<Button onClick={handleCloseModal}>Close modal</Button>
		</ModalWrapper>,
		document.body
	);
};
