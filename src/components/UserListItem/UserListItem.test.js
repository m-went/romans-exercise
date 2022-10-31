import { render, screen } from '@testing-library/react';
import UserListItem from './UserListItem';

const mockUserProp = { name: 'Michał Went', attendance: '55%', average: '4.5' };

describe('unit tests', () => {
  test('renders all elements', () => {
    render(<UserListItem user={mockUserProp} />);
    const userNameElement = screen.getByText('Michał Went');
    const userAttendanceElement = screen.getByText(/55%/i);
    const userAverageElement = screen.getByText(/4.5/i);
    const deleteButton = screen.getByRole('button');
    expect(userNameElement).toBeInTheDocument();
    expect(userAttendanceElement).toBeInTheDocument();
    expect(userAverageElement).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();
  });
});
