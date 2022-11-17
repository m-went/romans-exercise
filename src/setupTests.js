// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { allHandlers } from './mocks/handlers/allHandlers';
import { db } from './mocks/db';
import { faker } from '@faker-js/faker';

const server = setupServer(...allHandlers);

faker.seed(123);

const createGroups = () => {
  for (let i = 0; i < 3; i++) {
    const newGroup = {
      id: faker.datatype.uuid(),
      name: faker.music.genre(),
    };
    db.group.create(newGroup);
  }
};

const createTeacher = () => {
  const NewTeacher = {
    id: '1',
    name: 'Jacek Sobczak',
    login: 'teacher@studybuddy.com',
    password: 'abc1234',
  };
  db.teacher.create(NewTeacher);
};

const createUsers = () => {
  for (let i = 0; i < 15; i++) {
    const newUser = {
      id: faker.datatype.uuid(),
      name: faker.name.fullName(),
      attendance: faker.datatype.number({ min: 0, max: 100, precision: 1 }).toString(),
      average: faker.datatype.number({ min: 2, max: 5, precision: 0.1 }).toString(),
      course: `${faker.name.jobDescriptor()} ${faker.name.jobArea()}`,
      group: db.group.getAll()[faker.datatype.number({ min: 0, max: 2 })].name,
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

beforeAll(() => {
  createGroups();
  createTeacher();
  createUsers();

  server.listen();
});

afterEach(() => server.resetHandlers());
afterAll(() => server.close());
