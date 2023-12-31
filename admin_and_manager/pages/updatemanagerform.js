import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerUpdateForm = ({ managerId, onUpdateManager }) => {
  const [managerData, setManagerData] = useState({

    name: '',
    email: '',
    password: '',
    address: '',
    adminid: '',
  });

  useEffect(() => {
    // Fetch admin details when component mounts
    fetchManagerDetails();
  }, [managerId]);

  const fetchManagerDetails = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/admin/findmanager/${managerId}`,
        {
          withCredentials: true,
        }
      );
      const managerDetails = response.data;
      setManagerData(managerDetails);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManagerData({
      ...managerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the updated admin data to the parent component
    onUpdateManager(managerData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:
        <input
          type="text"
          name="name"
          value={managerData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={managerData.email}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={managerData.password}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        File:
        <input
          type="textarea"
          name="address"
          value={managerData.address}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label>
        Phone:
        <input
          type="number"
          name="adminid"
          value={managerData.adminid}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <button className="btn btn-outline btn-accent" type="submit">Update Manager</button>
    </form>
  );
};

export default ManagerUpdateForm;
