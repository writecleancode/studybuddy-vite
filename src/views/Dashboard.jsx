import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { useModal } from 'src/components/organisms/Modal/useModal';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { Modal } from 'src/components/organisms/Modal/Modal';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const [currentStudent, setCurrentStudent] = useState({});
	const { id } = useParams();
	const { getGroups, getStudentById } = useStudents();
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	const handleOpenStudentDetails = async id => {
		const student = await getStudentById(id);
		setCurrentStudent(student);
		handleOpenModal();
	};

	useEffect(() => {
		(async () => {
			const data = await getGroups();
			setGroups(data);
		})();
	}, [getGroups]);

	if (!id && groups.length) return <Navigate to={`/group/${groups[0]}`} />;

	return (
		<Wrapper>
			<TitleWrapper>
				<StyledTitle as='h2'>Group {id}</StyledTitle>
				<nav>
					{groups.map(group => (
						<Link key={group} to={`/group/${group}`}>
							{group}
						</Link>
					))}
				</nav>
			</TitleWrapper>
			<GroupWrapper>
				<StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
				<Modal student={currentStudent} isOpen={isOpen} handleClose={handleCloseModal} />
			</GroupWrapper>
		</Wrapper>
	);
};
