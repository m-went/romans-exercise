import { screen, render } from '@testing-library/react';
import UserList from './UserList';
import App from '../App/App';
import { BrowserRouter } from 'react-router-dom';
import { handlers } from '../../mocks/handlers';
import { setupServer } from 'msw/node';

const server = setupServer(...handlers);

describe('userList tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('render component', () => {
    render(<UserList />);
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    expect(headerElement).toBeInTheDocument();
  });

  test('check if users are properly rendered', async () => {
    render(
      <BrowserRouter>
        <App>
          <UserList />
        </App>
      </BrowserRouter>
    );
    const nameElement = await screen.findByText('Adam Romański');
    expect(nameElement).toBeInTheDocument();
  });
});

/*      test('check if deleteUser button works properly', () => {
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
  });  */
