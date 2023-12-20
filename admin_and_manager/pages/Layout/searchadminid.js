import React, { useState } from 'react';
import { getUserByID } from './searchadmin';
import Layout from './layout';
 
const YourComponent = () => {
  const [userId, setUserId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
 
  const fetchUserByID = async () => {
    try {
      const user = await getUserByID(userId);
      setUserData(user);
      setError(null);
    } catch (error) {
      console.error('Error fetching user by ID:', error);
      setUserData(null);
      setError('Error fetching user. Please try again.');
    }
  };
 

  return (
    <Layout>
      <div className="container mx-auto mt-8">
        <label className="block text-lg font-semibold mb-2">Enter User ID:</label>
        <div className="flex items-center">
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="py-2 px-3 border rounded-md mr-2"
          />
          <button
            onClick={fetchUserByID}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Search User
          </button>
        </div>
   
        {userData && (
  <div className="mt-8">
    <h2 className="text-xl font-semibold mb-4">Admin Information</h2>
    <div className="bg-black-100 p-4 rounded-md">
      <table className="min-w-full bg-black border border-gray-300 rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Field</th>
            <th className="py-2 px-4 border-b">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(userData).map(([key, value]) => (
            <tr key={key}>
              <td className="py-2 px-4 border-2 font-semibold">{key}</td>
              <td className="py-2 px-4 border-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}

   
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      </Layout>
    );
  };
 
export default YourComponent;