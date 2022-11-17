import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('searchbar tests', () => {
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
    fireEvent.change(input, { target: { value: 'Will' } });
    const foundUser = await screen.findByText(/Willard/);
    expect(input).toBeInTheDocument();
    expect(foundUser).toBeInTheDocument();
  });

  test('hides list when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Find student');
    fireEvent.change(input, { target: { value: 'Will' } });
    const foundUser = await screen.findByText(/Willard/);
    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(foundUser).not.toBeInTheDocument();
    });
  });
});
