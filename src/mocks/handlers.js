import { rest } from 'msw';
import students from './students';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    console.log(students);
    return res(ctx.status(200), ctx.json(students));
  }),
];
