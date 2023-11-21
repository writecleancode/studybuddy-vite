import styled from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 92px 1fr;
	grid-template-columns: 170px 1fr 0.77fr;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.lightGrey};
`;
