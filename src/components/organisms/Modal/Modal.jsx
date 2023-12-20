import { createPortal } from 'react-dom';
import { StudentDetails } from 'src/components/molecules/StudentDetails/StudentDetails';
import { Button } from 'src/components/atoms/Button/StyledButton';
import { ModalWrapper } from './Modal.styles';

export const Modal = ({ handleClose, student }) => {
	return createPortal(
		<ModalWrapper>
			<StudentDetails student={student} />
			<Button onClick={handleClose}>Close</Button>
		</ModalWrapper>,
		document.body
	);
};
