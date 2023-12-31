import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '../Layout/layout';

const AddManager = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    adminid: '', // Assuming you will get this from the admin who is logged in
  });
  const [success, setSuccess] = useState('')
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/admin/addmanager', formData);
      console.log('Manager added successfully:', response.data);
      setSuccess('Manager added successfully');
    } catch (error) {
      console.error('Error adding manager:', error.message);
    }
  };

  return (

    <Layout>
 <button className="btn btn-active btn-link"> <Link  className="link link-primary" href="/admindashboard/profile">Back To Dashboard</Link> </button>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add Manager</h1>
      {success && (
          <div className="mb-4 text-green-500">
            <strong>{success}</strong>
          </div>
        )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-600">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="adminid" className="block text-sm font-medium text-gray-600">
            Admin ID:
          </label>
          <input
            type="text"
            id="adminid"
            name="adminid"
            value={formData.adminid}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Add Manager
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default AddManager;
