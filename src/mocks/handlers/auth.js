import { rest } from 'msw';
import { db } from '../db';
import { authRequest } from '../authRequest';

const sanitizeUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};

export const auth = [
  rest.post('/login', async (req, res, ctx) => {
    const data = await req.json();
    const user = db.teacher.findFirst({
      where: {
        login: {
          equals: data.login,
        },
      },
    });
    if (user && user.password === data.password) {
      const token = user.login;
      localStorage.setItem('__be_token__', token);
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
    }
    return res(
      ctx.status(403),
      ctx.json({
        error: 'Invalid user data',
      })
    );
  }),
  rest.get('/me', (req, res, ctx) => {
    if (authRequest(req)) {
      const user = db.teacher.getAll();
      return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
    }
    return res(ctx.status(401));
  }),
];
