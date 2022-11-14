import { groups } from './groups';
import { news } from './news';
import { users } from './users';
import { auth } from './auth';

export const allHandlers = [...groups, ...users, ...news, ...auth];
