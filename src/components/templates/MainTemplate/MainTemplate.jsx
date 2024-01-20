import { Navigation } from 'src/components/organisms/Navigation/Navigation';
import { SearchBar } from 'src/components/organisms/SearchBar/SearchBar';
import { NewsSection } from '../NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';
import { NotesWidget } from 'src/components/organisms/NotesWidget/NotesWidget';

export const MainTemplate = ({ children }) => {
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
