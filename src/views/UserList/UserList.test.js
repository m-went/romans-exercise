import { screen, render, fireEvent } from '@testing-library/react';
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
  test('render component', () => {
    render(<UserList users={mockUsersProp} />);
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    expect(headerElement).toBeInTheDocument();
  });
});
