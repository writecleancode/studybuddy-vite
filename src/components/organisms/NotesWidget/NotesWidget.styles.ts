import styled from 'styled-components';

export const Wrapper = styled.div<{ $isOpen: boolean }>`
	position: absolute;
	top: 40px;
	right: 0;
	border: 2px solid ${({ theme }) => theme.colors.darkGrey};
	width: 400px;
	height: auto;
	max-height: 700px;
	background-color: white;
	transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(400px)')};
	transition: transform 0.6s ease-in-out;
`;

export const WidgetHandler = styled.button`
	position: absolute;
	top: 40px;
	left: -55px;
	width: 80px;
	height: 30px;
	border: none;
	border-radius: 8px 8px 0 0;
	background-color: ${({ theme }) => theme.colors.darkGrey};
	color: white;
	transform: rotate(-90deg);
	cursor: pointer;
`;

export const NotesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 60px;
	min-height: 110px;
	max-height: 700px;
	overflow-y: scroll;
`;
