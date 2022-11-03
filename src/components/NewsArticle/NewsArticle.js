import styles from './NewsArticle.module.scss';

function NewsArticle({ title, category, content }) {
  return (
    <div className={`${styles.newsArticle}`}>
      <div className={`${styles.newsTitle}`}>
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
      <div className={`${styles.newsContent}`}>
        <p>{content}</p>
      </div>
    </div>
  );
}
export default NewsArticle;
