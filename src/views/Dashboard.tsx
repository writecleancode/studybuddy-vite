import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useStudents } from '../hooks/useStudents';
import { StudentsList } from '../components/organisms/StudentsList/StudentsList';
import { StyledTitle } from '../components/atoms/StyledTitle/StyledTitle';
import { GroupWrapper, TitleWrapper, Wrapper } from './Dashboard.styles';

export const Dashboard = () => {
	const [groups, setGroups] = useState([]);
	const { id } = useParams();
	const { getGroups } = useStudents();

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
				<StudentsList />
			</GroupWrapper>
		</Wrapper>
	);
};
