import { ReactNode } from 'react';
import { Navigation } from 'src/components/organisms/Navigation/Navigation';
import { SearchBar } from 'src/components/organisms/SearchBar/SearchBar';
import { NewsSection } from 'src/components/templates/NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';
import { NotesWidget } from 'src/components/organisms/NotesWidget/NotesWidget';

type MainTemplateProps = {
	children: ReactNode;
};

export const MainTemplate = ({ children }: MainTemplateProps) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<NewsSection />
			<NotesWidget />
		</Wrapper>
	);
};
