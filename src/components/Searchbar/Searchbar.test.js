import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../../mocks/handlers';
import SearchBar from './SearchBar';

const server = setupServer(...handlers);

describe('searchbar tests', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('renders the component', () => {
    render(<SearchBar />);
    const loggedUser = screen.getByText('Teacher');
    const input = screen.getByPlaceholderText('Find student');
    expect(loggedUser).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'ad' } });
    const foundUser = await screen.findByText(/Adam Romański/);
    expect(input).toBeInTheDocument();
    expect(foundUser).toBeInTheDocument();
  });

  test('hides list when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'ad' } });
    const foundUser = await screen.findByText(/Adam Romański/);
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(foundUser).not.toBeVisible();
    });
  });
});
