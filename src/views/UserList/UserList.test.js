import { screen, render, fireEvent } from '@testing-library/react';
import UserList from './UserList';
import UsersProvider from '../../providers/UsersProvider';

describe('userList tests', () => {
  test('render component', () => {
    render(<UserList />);
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    expect(headerElement).toBeInTheDocument();
  });

  test('check if users are properly rendered', () => {
    render(
      <UsersProvider>
        <UserList />
      </UsersProvider>
    );
    const nameElement = screen.getByText('Adam Romański');
    expect(nameElement).toBeInTheDocument();
  });

  test('check if deleteUser button works properly', () => {
    render(
      <UsersProvider>
        <UserList />
      </UsersProvider>
    );
    const buttonElement = screen.getByTestId('Adam Romański');
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  });
});
