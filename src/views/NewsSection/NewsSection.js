import styles from './NewsSection.module.scss';
import NewsArticle from '../../components/NewsArticle/NewsArticle';
import axios from 'axios';
import { useEffect, useState } from 'react';

function NewsSection(props) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getNews = async () => {
      try {
        const data1 = axios.get('https://catfact.ninja/fact');
        const data2 = axios.get('https://www.boredapi.com/api/activity/');
        const data3 = axios.get('https://official-joke-api.appspot.com/random_joke');
        const data4 = axios.get('https://dog.ceo/api/breeds/image/random');
        const catFact = await data1;
        const activityIdea = await data2;
        const joke = await data3;
        const randomDogPhoto = await data4;
        const newArticles = [
          {
            id: catFact.data.length,
            title: 'Todays cat fact',
            category: 'Education',
            content: catFact.data.fact,
          },
          {
            id: activityIdea.data.key,
            title: 'Todays activity idea',
            category: 'Ideas',
            content: activityIdea.data.activity,
          },
          {
            id: joke.data.id,
            title: 'Joke of the day',
            category: 'Entertainment',
            content: `${joke.data.setup} - ${joke.data.punchline}`,
          },
          {
            id: 'dogImgGen',
            title: 'Todays dog image',
            category: 'Entertainment',
            content: 'Todays doggo:',
            image: randomDogPhoto.data.message,
          },
        ];
        setIsLoading(false);
        setArticles(newArticles);
      } catch (e) {
        setIsLoading(false);
        setError('Something went wrong, please try again later');
      }
    };
    getNews();
  }, []);

  const newsArticles = articles.map((article) => {
    return (
      <NewsArticle
        title={article.title}
        category={article.category}
        content={article.content}
        image={article.image}
        id={article.id}
        key={article.id}
      />
    );
  });
  return (
    <div className={`${styles.newsSection}`}>
      <h2 className={`${styles.header}`}>Todays news</h2>
      {isLoading ? <h2 className={`${styles.header}`}>Loading...</h2> : newsArticles}
      {error ? <h2 className={`${styles.header}`}>{error}</h2> : ''}
    </div>
  );
}
export default NewsSection;
