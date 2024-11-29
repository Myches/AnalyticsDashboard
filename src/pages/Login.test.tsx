import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './Login'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


jest.mock('axios');
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockNavigate = useNavigate() as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();  
  });

  it('should render login form', () => {
    render(<Login />);
    expect(screen.getByText(/Login/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/)).toBeInTheDocument();
  });

  it('should display loading state during form submission', async () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /Login/ });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    
    (axios.post as jest.Mock).mockResolvedValueOnce({
      data: { data: { access: 'mockToken' } },
    });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Loading/)).toBeInTheDocument(); 

    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/dashboard'));
    expect(localStorage.getItem('token')).toBe('mockToken');
  });

  it('should display error message when login fails', async () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /Login/ });

    fireEvent.change(emailInput, { target: { value: 'wrong@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });

    // Mocking axios.post to simulate a failed response
    (axios.post as jest.Mock).mockRejectedValueOnce({
      response: { data: { message: 'Invalid credentials' } },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Invalid credentials/)).toBeInTheDocument();
    });
  });

  it('should handle loading and error states correctly', async () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const submitButton = screen.getByRole('button', { name: /Login/ });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    
    (axios.post as jest.Mock).mockReturnValueOnce(new Promise(() => {}));

    fireEvent.click(submitButton);

    expect(screen.getByText(/Loading/)).toBeInTheDocument();

    
    (axios.post as jest.Mock).mockRejectedValueOnce({
      response: { data: { message: 'Something went wrong' } },
    });

    await waitFor(() => expect(screen.getByText(/Something went wrong/)).toBeInTheDocument());
  });
});
