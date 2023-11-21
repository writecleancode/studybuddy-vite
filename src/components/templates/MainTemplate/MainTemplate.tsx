import { ReactNode } from 'react';
import { Navigation } from '../../organisms/Navigation/Navigation';
import { SearchBar } from '../../organisms/SearchBar/SearchBar';
import { NewsSection } from '../NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			<NewsSection />
			{children}
		</Wrapper>
	);
};
