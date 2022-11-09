import { screen, render, fireEvent } from '@testing-library/react';
import UserList from './UserList';
import App from '../App/App';
import { BrowserRouter } from 'react-router-dom';

describe('userList tests', () => {
  test('render component', () => {
    render(<UserList />);
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    expect(headerElement).toBeInTheDocument();
  });

  /*   test('check if users are properly rendered', () => {
    render(
      <BrowserRouter>
        <App>
          <UserList />
        </App>
      </BrowserRouter>
    );
    const nameElement = screen.getByText('Adam Romański');
    expect(nameElement).toBeInTheDocument();
  }); */

  /*   test('check if deleteUser button works properly', () => {
    render(
      <BrowserRouter>
        <App>
          <UserList />
        </App>
      </BrowserRouter>
    );
    const buttonElement = screen.getByTestId('Adam Romański');
    fireEvent.click(buttonElement);
    expect(buttonElement).not.toBeInTheDocument();
  }); */
});
