import { screen, render, fireEvent } from '@testing-library/react';
import UserListContainer from './UserListContainer';
import { BrowserRouter } from 'react-router-dom';

describe('userListContainer tests', () => {
  test('render component and its children', async () => {
    render(
      <BrowserRouter>
        <UserListContainer />
      </BrowserRouter>
    );
    const headerElement = screen.getByRole('heading', { name: 'Students List' });
    const rockGroup = await screen.findByText('Rock');
    fireEvent.click(rockGroup);
    const rockGroupUser = await screen.findByText('Willard Howe');
    expect(headerElement).toBeInTheDocument();
    expect(rockGroup).toBeInTheDocument();
    expect(rockGroupUser).toBeInTheDocument();
  });
});
