import { rest } from 'msw';
import students from './students';
import groups from './groups';
import { catFact, activityIdea, randomDogPhoto, joke } from './news';

export const handlers = [
  rest.get('/group', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(groups));
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('/group/:id', (req, res, ctx) => {
    try {
      const { id } = req.params;
      const studentsFromThisGroup = students.filter((st) => st.group === id);
      if (studentsFromThisGroup.length > 0) {
        return res(ctx.status(200), ctx.json(studentsFromThisGroup));
      } else {
        return res(ctx.status(200), ctx.json(students));
      }
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('/students', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(students));
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('https://catfact.ninja/fact', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(catFact));
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('https://www.boredapi.com/api/activity/', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(activityIdea));
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('https://official-joke-api.appspot.com/random_joke', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(joke));
    } catch (e) {
      console.log(e);
    }
  }),

  rest.get('https://dog.ceo/api/breeds/image/random', (req, res, ctx) => {
    try {
      return res(ctx.status(200), ctx.json(randomDogPhoto));
    } catch (e) {
      console.log(e);
    }
  }),
];
