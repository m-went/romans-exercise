import styles from './NewsSection.module.scss';
import NewsArticle from '../../components/NewsArticle/NewsArticle';

const articles = [
  { id: 1, title: 'hello', category: 'weather', content: 'lorem ipsum' },
  { id: 2, title: 'hello', category: 'weather', content: 'lorem ipsum' },
  { id: 3, title: 'hello', category: 'weather', content: 'lorem ipsum' },
  { id: 4, title: 'hello', category: 'weather', content: 'lorem ipsum' },
];
function NewsSection(props) {
  const newsArticles = articles.map((article) => {
    return <NewsArticle title={article.title} category={article.category} content={article.content} id={article.id} />;
  });
  return (
    <div className={`${styles.newsSection}`}>
      <h2 className={`${styles.header}`}>Header</h2>
      {newsArticles}
    </div>
  );
}
export default NewsSection;
