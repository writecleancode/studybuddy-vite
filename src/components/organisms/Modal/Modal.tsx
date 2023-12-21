import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Student } from 'src/views/Dashboard';

type ModalProps = {
	isOpen: boolean;
	handleCloseModal: () => void;
	student: Student | Record<string, never>;
};

export const Modal = ({ isOpen, handleCloseModal, student }: ModalProps) => {
	return (
		<ModalWrapper isOpen={isOpen} onRequestClose={handleCloseModal} appElement={document.querySelector('#root') as HTMLDivElement}>
			<StudentDetails student={student} />
			<Button onClick={handleCloseModal}>Close</Button>
		</ModalWrapper>
	);
};
