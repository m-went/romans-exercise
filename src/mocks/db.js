import { factory, primaryKey } from '@mswjs/data';

export const db = factory({
  user: {
    id: primaryKey(String),
    name: String,
    attendance: String,
    average: String,
    group: String,
    course: String,
    grades: () => [
      {
        subject: 'Business Philosophy',
        average: String,
      },
      {
        subject: 'Marketing',
        average: String,
      },
      {
        subject: 'Modern Economy',
        average: String,
      },
    ],
  },

  group: {
    id: primaryKey(String),
    name: String,
  },

  teacher: {
    id: primaryKey(String),
    name: String,
    login: String,
    password: String,
  },
});
