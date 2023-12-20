import { createPortal } from 'react-dom';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Student } from 'src/views/Dashboard';

type ModalProps = {
	handleCloseModal: () => void;
	student: Student | Record<string, never>;
};

export const Modal = ({ handleCloseModal, student }: ModalProps) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails student={student} />
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>,
		document.body
	);
};
