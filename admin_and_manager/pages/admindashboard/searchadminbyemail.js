import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const AdminDetailsComponent = () => {
  const [email, setEmail] = useState('');
  const [adminData, setAdminData] = useState(null);
  const [error, setError] = useState(null);

  const fetchAdminByEmail = async (email) => {
    try {
      const response = await axios.get(`http://localhost:3000/admin/getadmin/${email}`);
      setAdminData(response.data);
      setError(null);
    } catch (error) {
      console.error('Error fetching admin by email:', error);
      setAdminData(null);
      setError('Error fetching admin. Please try again.');
    }
  };

  return (
    <div>
      <button className="btn btn-active btn-link">
        <Link className="link link-primary" href="/admindashboard/profile">
          Back To Dashboard
        </Link>
      </button>
      <div className="container mx-auto mt-8"></div>
      <label className="block text-lg font-semibold mb-2">Email:</label>
      <div className="flex items-center"></div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="py-2 px-3 border rounded-md mr-2"
      />
      <button
        onClick={() => fetchAdminByEmail(email)}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Fetch Admin
      </button>

      {adminData && (
        <div>
          <h2>Admin Data</h2>
          <table border="5">
            <thead>
              <tr>
                {Object.keys(adminData).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {Object.values(adminData).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminDetailsComponent;
