import { screen, render, fireEvent } from '@testing-library/react';
import { ErrorProvider } from '../../hooks/useError';
import { AuthProvider } from '../../hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App tests', () => {
  test('render login form if user is not logged in', () => {
    render(<App />);
    const mailInput = screen.getByLabelText('Login:');
    expect(mailInput).toBeInTheDocument();
  });

  test('shows error message if password is wrong', async () => {
    render(
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    );
    const mailInput = screen.getByLabelText('Login:');
    const passwordInput = screen.getByLabelText('Password:');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(mailInput, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongPassword' } });
    fireEvent.click(loginButton);
    const error = await screen.findByText(/Something went wrong. Please try again./);
    expect(error).toBeInTheDocument();
  });

  test('logs user in if credentials are right', async () => {
    render(
      <BrowserRouter>
        <ErrorProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ErrorProvider>
      </BrowserRouter>
    );
    const mailInput = screen.getByLabelText('Login:');
    const passwordInput = screen.getByLabelText('Password:');
    const loginButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(mailInput, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(passwordInput, { target: { value: 'abc1234' } });
    fireEvent.click(loginButton);
    const studentsList = await screen.findByText(/Students List/);
    expect(studentsList).toBeInTheDocument();
  });
});
