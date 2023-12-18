import { createPortal } from 'react-dom';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';

export const Modal = ({ handleClose, currentStudent }) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails currentStudent={currentStudent} />
			<Button onClick={handleClose}>Close modal</Button>
		</ModalWrapper>,
		document.body
	);
};
