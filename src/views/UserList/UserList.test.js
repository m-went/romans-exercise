import { screen, render, cleanup } from '@testing-library/react';
import UserList from './UserList';

const mockUsersProp = [
  { name: 'Michał Went', attendance: '55%', average: '4.5' },
  {
    name: 'Adam Romański',
    attendance: '39%',
    average: '2.3',
  },
];

describe('userList tests', () => {
  afterEach(cleanup);
  test('render component', () => {
    render(<UserList users={mockUsersProp} />);
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    expect(headerElement).toBeInTheDocument();
  });

  test('check if mock users are properly rendered', () => {
    render(<UserList users={mockUsersProp} />);
    const firstNameElement = screen.getByText('Michał Went');
    const secondNameElement = screen.getByText('Adam Romański');
    expect(firstNameElement).toBeInTheDocument();
    expect(secondNameElement).toBeInTheDocument();
  });
});
