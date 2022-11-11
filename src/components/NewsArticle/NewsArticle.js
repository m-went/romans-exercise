import styles from './NewsArticle.module.scss';

function NewsArticle({ title, category, content, image }) {
  return (
    <div className={`${styles.newsArticle}`}>
      <div className={`${styles.newsTitle}`}>
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
      <div className={`${styles.newsContent}`}>
        <p>{content}</p>
        {image ? (
          <div className={`${styles.imgContainer}`}>
            <img src={image} alt="News img" />
          </div>
        ) : (
          ''
        )}
      </div>
      <button>Read more</button>
    </div>
  );
}
export default NewsArticle;
