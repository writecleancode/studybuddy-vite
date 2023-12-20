import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStudents } from 'src/hooks/useStudents';
import { StudentsList } from 'src/components/organisms/StudentsList/StudentsList';
import { Modal } from 'src/components/organisms/Modal/Modal';
import { StyledTitle } from 'src/components/atoms/StyledTitle/StyledTitle';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';
import { useModal } from 'src/components/organisms/Modal/useModal';

export type Student = {
	id: number | string;
	name: string;
	attendance: string;
	average: string;
	group: string;
	course?: string;
	grades: {
		subject: string;
		average: string;
	}[];
};

type handleOpenStudentsDetailsType = (id: number) => void;

const mockStudent = {
	id: '1',
	name: 'Adam Romański',
	attendance: '39%',
	average: '2.3',
	group: 'A',
	course: 'Business Philosophy',
	grades: [
		{
			subject: 'Business Philosophy',
			average: '3.3',
		},
		{
			subject: 'Marketing',
			average: '4.7',
		},
		{
			subject: 'Modern Economy',
			average: '2.5',
		},
	],
};

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const [currentStudent, setCurrentStudent] = useState<Record<string, never> | Student>({});
	const { id } = useParams();
	const { getGroups, getStudentById } = useStudents();
	const { isOpen, handleOpenModal, handleCloseModal } = useModal();

	const handleOpenStudentsDetails: handleOpenStudentsDetailsType = async id => {
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
				<StudentsList handleOpenStudentsDetails={handleOpenStudentsDetails} />
				{isOpen ? <Modal handleCloseModal={handleCloseModal} student={mockStudent} /> : null}
			</GroupWrapper>
		</Wrapper>
	);
};
