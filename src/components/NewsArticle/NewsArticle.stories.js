import React from 'react';

import NewsArticle from './NewsArticle';

export default {
  title: 'Example/NewsSection/NewsArticle',
  component: NewsArticle,
  parameters: {
    id: 8,
    title: 'Todays cat fact',
    category: 'Education',
    content:
      'A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).',
    image: '',
  },
};

const Template = (args) => <NewsArticle {...args} />;

export const DefaultNews = Template.bind({});
DefaultNews.args = {
  id: 8,
  title: 'Todays cat fact',
  category: 'Education',
  content:
    'A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).',
  image: '',
};

export const ImageNews = Template.bind({});
ImageNews.args = {
  id: 8,
  title: 'Todays dog image',
  category: 'Entertainment',
  content: 'Todays doggo:',
  image: 'https://images.dog.ceo/breeds/african/n02116738_9818.jpg',
};
