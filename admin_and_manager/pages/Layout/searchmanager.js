import axios from 'axios';
 
const backendAPI = axios.create({
  baseURL: 'http://localhost:3000', 
});
 
export const getManagerID = async (id) => {
  try {
    const response = await backendAPI.get(`/admin/findmanagersbyadmin/${id}`,{withCredentials:true});
    return response.data; 
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
};