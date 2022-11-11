import { render, screen, fireEvent } from '@testing-library/react';
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
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Find student');
  });

  test('displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findByText(/Adam Romański/);
  });
});
