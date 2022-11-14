import { rest } from 'msw';
import { db } from '../db';

export const users = [
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
      const users = db.user.findMany({
        where: {
          name: {
            contains: searchVal.body,
          },
        },
      });
      return res(ctx.status(200), ctx.json(users));
    } else {
      return res(ctx.status(200), ctx.json([]));
    }
  }),

  rest.get('/students', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(db.user.getAll()));
  }),
];
