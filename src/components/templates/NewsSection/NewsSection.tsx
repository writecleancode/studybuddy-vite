import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArticleWrapper, ContentWrapper, NewsSectionHeader, TitleWrapper, Wrapper } from './NewsSection.styles';
import { Button } from '../../atoms/Button/StyledButton';

type Articles = {
	id: string;
	title: string;
	category: string;
	content: string;
	image: {
		url: string;
		alt: string;
	};
};

export const query = `
{
  allArticles {
    id
    title
    category
    content
    image {
      url
      alt
    }
  }
}
`;

export const NewsSection = () => {
	const [articles, setArticles] = useState<never[] | Articles[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		axios
			.post(
				'https://graphql.datocms.com/',
				{
					query: query,
				},
				{
					headers: {
						authorization: `Bearer ${import.meta.env.VITE_DATO_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => setArticles(data.allArticles))
			.catch(() => setError('Sorry, we could not load the articles...'));
	}, []);

	return (
		<Wrapper>
			<NewsSectionHeader>University News Feed</NewsSectionHeader>
			{articles.length ? (
				articles.map(({ id, title, category, content, image = null }) => (
					<ArticleWrapper key={id}>
						<TitleWrapper>
							<h3>{title}</h3>
							<p>{category}</p>
						</TitleWrapper>
						<ContentWrapper>
							<p>{content}</p>
							{image ? <img src={image.url} alt={image.alt} /> : null}
						</ContentWrapper>
						<Button $isBig>Read more</Button>
					</ArticleWrapper>
				))
			) : (
				<NewsSectionHeader>{error ? error : 'Loading...'}</NewsSectionHeader>
			)}
		</Wrapper>
	);
};
