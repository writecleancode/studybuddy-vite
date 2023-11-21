import { Navigation } from 'src/components/organisms/Navigation/Navigation';
import { SearchBar } from 'src/components/organisms/SearchBar/SearchBar';
import { NewsSection } from '../NewsSection/NewsSection';
import { Wrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			<NewsSection />
			{children}
		</Wrapper>
	);
};
