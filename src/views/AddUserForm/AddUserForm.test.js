import { fireEvent, render, screen } from '@testing-library/react';
import AddUserForm from './AddUserForm';
import UserList from '../UserList/UserList';
import UsersProvider from '../../providers/UsersProvider';

describe('add user tests', () => {
  test('checks if all elements render properly', () => {
    render(<AddUserForm />);
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    expect(nameInput).toBeInTheDocument();
    expect(attendanceInput).toBeInTheDocument();
    expect(averageInput).toBeInTheDocument();
  });

  test('checks if inputs changes their value', () => {
    render(<AddUserForm />);
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(attendanceInput, { target: { value: '54%' } });
    fireEvent.change(averageInput, { target: { value: '4.5' } });
    expect(nameInput.value).toBe('Michał Went');
    expect(attendanceInput.value).toBe('54%');
    expect(averageInput.value).toBe('4.5');
  });

  test('checks if click on add button clears inputs', () => {
    render(
      <UsersProvider>
        <AddUserForm />
      </UsersProvider>
    );
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const addButton = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(attendanceInput, { target: { value: '54%' } });
    fireEvent.change(averageInput, { target: { value: '4.5' } });
    fireEvent.click(addButton);
    expect(nameInput.value).toBe('');
    expect(attendanceInput.value).toBe('');
    expect(averageInput.value).toBe('');
  });

  test('checks if click on add button add user', () => {
    render(
      <UsersProvider>
        <AddUserForm />
        <UserList />
      </UsersProvider>
    );
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const addButton = screen.getByRole('button', { name: 'Add' });
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(attendanceInput, { target: { value: '54%' } });
    fireEvent.change(averageInput, { target: { value: '4.5' } });
    fireEvent.click(addButton);
    expect(nameInput.value).toBe('');
    expect(attendanceInput.value).toBe('');
    expect(averageInput.value).toBe('');
    expect(screen.getByText('Michał Went')).toBeInTheDocument();
  });
});
