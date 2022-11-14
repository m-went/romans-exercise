import { rest } from 'msw';

const catFact = {
  fact: 'A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).',
  length: 156,
};

const activityIdea = {
  activity: "Bake something you've never tried before",
  key: 7806284,
};

const joke = {
  punchline: 'MOODOO.',
  setup: 'What kind of magic do cows believe in?',
  id: 268,
};
const randomDogPhoto = {
  message: 'https://images.dog.ceo/breeds/african/n02116738_9818.jpg',
};

export const news = [
  rest.get('https://catfact.ninja/fact', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(catFact));
  }),

  rest.get('https://www.boredapi.com/api/activity/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(activityIdea));
  }),

  rest.get('https://official-joke-api.appspot.com/random_joke', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(joke));
  }),

  rest.get('https://dog.ceo/api/breeds/image/random', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(randomDogPhoto));
  }),
];
