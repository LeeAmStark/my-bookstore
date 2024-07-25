import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { isTokenExpired } from './components/utils/authUtils';

const back_end_port = "http://localhost:5000";

const dataProtect = async (navigate) => {
  const token = localStorage.getItem("jwt");

  if (!token || isTokenExpired(token)) {
    console.error("Token is missing or expired");
    localStorage.removeItem("jwt");
    navigate('/login');
    return;
  }
  try {
    const response = await axios.get(`${back_end_port}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Protected data: ", response.data);
  } catch (error) {
    console.error("Error fetching protected data: ", error.response ? error.response.data : error.message);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("jwt");
      navigate('/login');
    }
  }
};

export default dataProtect;
