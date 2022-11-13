import { setupWorker } from 'msw';
import { handlers } from './handlers';
import { db } from './db';
import { faker } from '@faker-js/faker';

export const worker = setupWorker(...handlers);

faker.seed(123);

const groups = ['A', 'B', 'C'];

const createUsers = () => {
  for (let i = 0; i < 15; i++) {
    const newUser = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      attendance: faker.datatype.number({ min: 0, max: 100, precision: 1 }).toString(),
      average: faker.datatype.number({ min: 2, max: 5, precision: 0.1 }).toString(),
      course: `${faker.name.jobDescriptor()} ${faker.name.jobArea()}`,
      group: groups[faker.datatype.number({ min: 0, max: 2 })],
      grades: [
        {
          subject: 'Business Philosophy',
          average: faker.datatype.number({ min: 2, max: 5, precision: 0.1 }).toString(),
        },
        {
          subject: 'Marketing',
          average: faker.datatype.number({ min: 2, max: 5, precision: 0.1 }).toString(),
        },
        {
          subject: 'Modern Economy',
          average: faker.datatype.number({ min: 2, max: 5, precision: 0.1 }).toString(),
        },
      ],
    };
    db.user.create(newUser);
  }
};

createUsers();
