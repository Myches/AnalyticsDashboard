
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../api/apiService';


export default function LogoutButton (){
  const navigate = useNavigate();

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    
    if (!token) {
      navigate('/dashboard');
      return;
    }

    try {
      
      await logoutUser(token);

      localStorage.removeItem('token');

      
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-sm text-white p-2 rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
};

