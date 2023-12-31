import React, { useState } from 'react';
import { getManagerID } from './searchmanager';
import Link from 'next/link';
import Layout from './layout';

const ManagerComponent = () => {
  const [adminId, setAdminId] = useState('');
  const [managerData, setManagerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchManagerByAdminID = async () => {
    try {
      const manager = await getManagerID(adminId);
      setManagerData(manager);
      setError(null);
    } catch (error) {
      console.error('Error fetching manager by Admin ID:', error);
      setManagerData(null);
      setError('Error fetching manager. Please try again.');
    }
  };

  // Function to flatten nested objects
  const flattenObject = (obj) => {
    const flattened = {};

    const flatten = (data, prefix = '') => {
      for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
          flatten(data[key], `${prefix}${key}.`);
        } else {
          flattened[`${prefix}${key}`] = data[key];
        }
      }
    };

    flatten(obj);
    return flattened;
  };

  return (
    <Layout>
      <button className="btn btn-active btn-link">
        {' '}
        <Link className="link link-primary" href="/admindashboard/profile">
          Back To Dashboard
        </Link>{' '}
      </button>
      <div className="container mx-auto mt-8">
        <label className="block text-lg font-semibold mb-2">Enter Admin ID:</label>
        <div className="flex items-center">
          <input
            type="text"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            className="py-2 px-3 border rounded-md mr-2"
          />
          <button
            onClick={fetchManagerByAdminID}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Search Manager
          </button>
        </div>

        {managerData && (
          <div>
            <h2>Manager Data</h2>
            {/* Table */}
            <table border="15">
              <thead>
                <tr>
                  {Object.keys(flattenObject(managerData)).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {Object.values(flattenObject(managerData)).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              </tbody>
            </table>

            {/* List */}
            <h2>Manager Data List</h2>
            <ul>
              {Object.entries(flattenObject(managerData)).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </Layout>
  );
};

export default ManagerComponent;
