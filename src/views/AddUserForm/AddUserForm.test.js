import { fireEvent, render, screen } from '@testing-library/react';
import AddUserForm from './AddUserForm';

describe('add user tests', () => {
  test('checks if all elements render properly', () => {
    render(<AddUserForm />);
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const consentInput = screen.getByRole('checkbox');
    expect(nameInput).toBeInTheDocument();
    expect(attendanceInput).toBeInTheDocument();
    expect(averageInput).toBeInTheDocument();
    expect(consentInput).toBeInTheDocument();
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

  test('checks if click on add button clears inputs when consent is true', () => {
    render(<AddUserForm />);
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const addButton = screen.getByRole('button');
    const consentInput = screen.getByRole('checkbox');
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(attendanceInput, { target: { value: '54%' } });
    fireEvent.change(averageInput, { target: { value: '4.5' } });
    fireEvent.click(consentInput);
    fireEvent.click(addButton);
    expect(nameInput.value).toBe('');
    expect(attendanceInput.value).toBe('');
    expect(averageInput.value).toBe('');
  });

  test('checks if click on add button doesnt clears inputs and show error message when consent is false', () => {
    render(<AddUserForm />);
    const nameInput = screen.getByTestId('name');
    const attendanceInput = screen.getByTestId('attendance');
    const averageInput = screen.getByTestId('average');
    const addButton = screen.getByRole('button', { name: 'Add' });
    const consentInput = screen.getByRole('checkbox');
    fireEvent.change(nameInput, { target: { value: 'Michał Went' } });
    fireEvent.change(attendanceInput, { target: { value: '54%' } });
    fireEvent.change(averageInput, { target: { value: '4.5' } });
    fireEvent.click(addButton);
    expect(nameInput.value).toBe('Michał Went');
    expect(attendanceInput.value).toBe('54%');
    expect(averageInput.value).toBe('4.5');
    expect(consentInput.checked).toEqual(false);
    const errorMessage = screen.getByText('You need to give consent');
    expect(errorMessage).toBeInTheDocument();
  });
});
