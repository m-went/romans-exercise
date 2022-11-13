import { rest } from 'msw';
import students from './students';
import groups from './groups';
import { catFact, activityIdea, randomDogPhoto, joke } from './news';
import { db } from './db';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(groups));
  }),

  rest.get('/group/:id', (req, res, ctx) => {
    const { id } = req.params;
    const users = db.user.findMany({
      where: {
        group: {
          equals: id,
        },
      },
    });
    if (users.length > 0) {
      return res(ctx.status(200), ctx.json(users));
    } else {
      return res(ctx.status(200), ctx.json(students));
    }
  }),

  rest.get('/users/:id', (req, res, ctx) => {
    const { id } = req.params;
    const user = db.user.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
    if (user) {
      return res(ctx.status(200), ctx.json(user));
    } else {
      return res(ctx.status(404), ctx.json({ error: 'No user found' }));
    }
  }),

  rest.post('/searchUsers', async (req, res, ctx) => {
    const searchVal = await req.json();
    if (searchVal.body !== '') {
      const foundStudents = students.filter((user) => {
        return user.name.toLowerCase().includes(searchVal.body.toLowerCase());
      });
      return res(ctx.status(200), ctx.json(foundStudents));
    } else {
      return res(ctx.status(200), ctx.json([]));
    }
  }),

  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(students));
  }),

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
