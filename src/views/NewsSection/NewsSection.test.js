import { render, screen } from '@testing-library/react';
import NewsSection from './NewsSection';
import axios from 'axios';

const mockData = {
  data: {
    fact: 'A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).',
    length: 156,
  },
};

jest.mock('axios');

describe('News section tests', () => {
  test('properly renders element', () => {
    render(<NewsSection />);
    const newsHeader = screen.getByText('Todays news');
    expect(newsHeader).toBeInTheDocument();
  });

  test('renders news when get resolved value', async () => {
    axios.get.mockResolvedValue(mockData);
    render(<NewsSection />);
    const newsTitle = await screen.findByText('Todays cat fact');
    expect(newsTitle).toBeInTheDocument();
  });

  test('shows error when get rejected value', async () => {
    axios.get.mockRejectedValue('some kind of error');
    render(<NewsSection />);
    const errorMessage = await screen.findByText('Something went wrong, please try again later');
    expect(errorMessage).toBeInTheDocument();
  });
});
