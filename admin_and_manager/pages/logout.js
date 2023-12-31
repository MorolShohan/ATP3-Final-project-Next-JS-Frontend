import { useRouter } from 'next/router';
import axios from 'axios';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/admin/signout',{},{withCredentials:true});
      sessionStorage.clear();
      router.push('/loginform');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <button onClick={handleLogout}>LOGOUT</button>
  );
};

export default LogoutButton;
