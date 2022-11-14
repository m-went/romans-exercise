import { rest } from 'msw';
import { db } from '../db';

export const groups = [
  rest.get('/groups', (req, res, ctx) => {
    const allGroups = db.group.getAll();
    return res(ctx.status(200), ctx.json(allGroups));
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
      return res(ctx.status(200), ctx.json(db.user.getAll()));
    }
  }),
];
